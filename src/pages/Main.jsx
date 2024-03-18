import Header from "../components/Header";
import MainCarousel from "../components/MainCarousel";
import Nav from "../components/Nav";
import MultipleItems from "../components/Slider";

const Main = () => {
  return (
    <div className="w-screen h-[1250px] flex flex-col items-center">
      <Header />
      <Nav />
      <MainCarousel />
      <MultipleItems />
    </div>
  );
};

export default Main;
