import { Carousel } from "flowbite-react";
import cinema1 from "../assets/cinema_1.jpeg";
import cinema2 from "../assets/cinema_2.png";
import cinema3 from "../assets/cinema_3.jpeg";

const MainCarousel = () => {
    return (
        <div className="flex absolute top-0 w-1920 h-770">
        <Carousel leftControl=" " rightControl=" ">
          <img src={cinema1} alt="..." />
          <img src={cinema2} alt="..." />
          <img src={cinema3} alt="..." />
        </Carousel>
      </div>
    );
};

export default MainCarousel;