import Header from "../components/Header";
import MainCarousel from "../components/MainCarousel";
import Nav from "../components/Nav";

const Main = () => {
  return (
    <div className="w-screen h-1100 flex justify-center bg-black relative">
      <Header />
      <Nav />
      {/* Carousel gradient */}
      <div className="absolute top-0 bg-cinema w-1920 h-770 z-10" />
      <MainCarousel />
    </div>
  );
};

export default Main;
