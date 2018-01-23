import React from "react";
import left from "../../assets/slider-left-arrow.svg";

const SliderLeftArrow = ({ prevSlide }) => {
  return (
    <div className="slider-left-arrow" onClick={prevSlide}>
      <img src={left} alt="left arrow" />
    </div>
  );
};

export default SliderLeftArrow;
