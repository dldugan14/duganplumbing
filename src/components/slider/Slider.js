import React, { Component } from "react";
// import axios from "axios";
import Slide from "./Slide";
// import Dots from "./Dots";

import SliderLeftArrow from "./SliderLeftArrow";
import SliderRightArrow from "./SliderRightArrow";
const one = "http://www.charlesconnerplumbing.com/images/plumberstock.jpg";
const two =
  "https://www.usnews.com/dims4/USNEWS/a2016a6/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Faf%2F23%2F961aa2e3438e9a975473318dace7%2F140813-plumber-stock.jpg";
const three =
  "http://utahcountyplumbing.com/wp-content/uploads/2015/09/bigstock-Plumbing-And-Tools-Lying-On-Dr-72968716.jpg";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      index: 0,
      translateValue: 0,
      autoplay: true
    };
  }

  componentDidMount() {
    const pics = [];

    pics.push(one);
    pics.push(two);
    pics.push(three);
    this.setState({
      images: pics
    });
  }

  renderSlides = () => {
    const { images } = this.state;
    let slides = [];

    for (let i = 0; i < images.length; i++) {
      slides.push(<Slide key={i} image={images[i]} />);
    }

    return slides;
  };

  render() {
    const {
      // images, index,
      translateValue
    } = this.state;
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          <div>{this.renderSlides()}</div>
        </div>

        {/* <Dots
          index={index}
          quantity={images.length}
          dotClick={this.handleDotClick}
        /> */}

        <SliderLeftArrow prevSlide={this.goToPreviousSlide} />
        <SliderRightArrow nextSlide={this.goToNextSlide} />
      </div>
    );
  }

  goToPreviousSlide = () => {
    if (this.state.index === 0) return;

    this.setState({
      translateValue: (this.state.translateValue += this.slideWidth()),
      index: (this.state.index -= 1)
    });
  };

  goToNextSlide = () => {
    const { images } = this.state;

    if (this.state.index === images.length - 1) {
      return this.setState({
        translateValue: 0,
        index: 0
      });
    }

    this.setState({
      translateValue: (this.state.translateValue -= this.slideWidth()),
      index: (this.state.index += 1)
    });
  };

  slideWidth = () => {
    const slide = document.querySelector(".slide");
    return slide.clientWidth;
  };
} // End Class
