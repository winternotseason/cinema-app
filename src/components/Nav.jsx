const Nav = () => {
  return (
    <div className="flex absolute top-20 z-20 w-200">
      <ul className="flex w-full p-2 text-white justify-center items-center text-sm">
        <li className="px-6">예매</li>
        <li className="custom-li-style">영화</li>
        <li className="custom-li-style">영화관</li>
        <li className="custom-li-style">이벤트</li>
        <li className="custom-li-style">스토어</li>
      </ul>
    </div>
  );
};

export default Nav;
