import React from "react";
import right from "../../assets/slider-right-arrow.svg";
const SliderRightArrow = ({ nextSlide }) => {
  return (
    <div className="slider-right-arrow" onClick={nextSlide}>
      <img src={right} alt="right arrow" />
    </div>
  );
};

export default SliderRightArrow;
