import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SoberCarousel = () => {
  return (
    <Carousel autoPlay autoFocus>
      <div className="container-img text-center">
        <img
          alt=""
          src="https://images.pexels.com/photos/169196/pexels-photo-169196.jpeg"
          className="d-block img-fluid"
        />
      </div>
      <div className="container-img">
        <img
          alt=""
          src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className="container-img">
        <img
          alt=""
          src="https://images.pexels.com/photos/34763/baby-sleeping-baby-baby-girl.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className="container-img">
        <img
          alt=""
          src="https://images.pexels.com/photos/12759468/pexels-photo-12759468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className="container-img">
        <img
          alt=""
          src="https://images.pexels.com/photos/5759223/pexels-photo-5759223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </Carousel>
  );
};

export default SoberCarousel;
