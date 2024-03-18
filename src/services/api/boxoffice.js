import axios from "axios";

export const getMoviePoster = async (title, openDt) => {
  const key = import.meta.env.VITE_BOXOFFICE_KEY;
  const res = await axios.get(
    `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${title}&releaseDts=${openDt}&ServiceKey=${key}`
  );
  return res.data.Data[0].Result[0].posters.split("|")[0]; // poster
};

export const getDailyBoxOffice = async () => {
  const key = import.meta.env.VITE_POSTER_KEY;
  const res = await axios.get(
    `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20240311`
  );
  const boxOfficeList = await res.data.boxOfficeResult.dailyBoxOfficeList;
  const posters = await Promise.all(
    boxOfficeList.map(async (movie) => {
      const rank = movie.rank;
      const title = movie.movieNm;
      const dt =
        movie.openDt.slice(0, 4) +
        movie.openDt.slice(5, 7) +
        movie.openDt.slice(8, 10);
      const poster = await getMoviePoster(title, dt);
      const test = { rank, title, dt, poster };
      return test;
    })
  );

  // 리스트 전체를 불러오는건데 ...
  // map 함수를 써서 내부에서 getmovieposter를 반환해야하는데?
  // 예를들면 boxofficelist[0] => 파묘 => 파묘의 포스터
  return posters;
};
// 타이틀이랑 개봉일 불러와서 포스터 링크 return
