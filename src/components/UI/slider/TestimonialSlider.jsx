import React from "react";
import Slider from "react-slick";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import "../../../styles/slider.scss";
const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Slider {...settings}>
            <div>
                <p className="slider__text">
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam neque aspernatur. Delectus commodi corporis necessitatibus id, esse voluptas labore!"
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img src={ava01} alt="avatar" />
                    <h6>Jhon Done</h6>
                </div>
            </div>

            <div>
                <p className="slider__text">
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam neque aspernatur. Delectus commodi corporis necessitatibus id, esse voluptas labore!"
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img src={ava02} alt="avatar"  />
                    <h6>Mitchell Marsh</h6>
                </div>
            </div>

            <div>
                <p className="slider__text">
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam neque aspernatur. Delectus commodi corporis necessitatibus id, esse voluptas labore!"
                </p>
                <div className="slider__content d-flex align-items-center gap-3">
                    <img src={ava03} alt="avatar"/>
                    <h6>Steven Dot</h6>
                </div>
            </div>
        </Slider>
    )
}

export default TestimonialSlider;