import { useEffect, useState } from "react";
import { getDailyBoxOffice } from "../services/api/boxoffice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getBoxOffice = async () => {
      const list = await getDailyBoxOffice();
      setMovies(list);
    };
    getBoxOffice();
  }, []);

  return (
    <div>
      <Slider {...settings} className="w-[30rem] mt-[4rem] bg-red-600">
        {movies.map((movie) => (
          <div className="h-[30rem]" key={Math.random()}>
            <img src={movie.poster} alt="" />

            <div className="text-indigo-500">
              {movie.rank}
              {movie.title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
