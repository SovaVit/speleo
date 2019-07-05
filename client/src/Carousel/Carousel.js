import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MyCarousel = props => {
  const { items } = props.photo;
  const handleRender = () => {
    const resultOfRender = items.map((item, index) => {
      return (
        <div key={index}>
          <img src={item.photoPath} alt="cave" />
        </div>
      );
    });
    return resultOfRender;
  };

  return items.length && <Carousel autoPlay>{handleRender()}</Carousel>;
};
export default MyCarousel;
