import logo from "../assets/lottelogo.png";

const Header = () => {
  return (
    <div className="flex w-200  pt-3 pb-2  text-gray-400 font-semibold justify-between border-b border-slate-400">
      <div className="flex w-1/5 justify-around text-xs items-center">
        <p>페이스북</p>
        <p>유튜브</p>
        <p>인스타그램</p>
      </div>
      <div className="flex justify-center w-1/2  items-center">
        <img className="w-1/2" src={logo} alt="logo" />
      </div>
      <div className="flex w-1/4 justify-around text-xs text-center items-center">
        <p>멤버십</p>
        <p>고객센터</p>
        <p>단체관람/대관문의</p>
        <p>로그인</p>
      </div>
    </div>
  );
};

export default Header;
