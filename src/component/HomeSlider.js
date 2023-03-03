import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../css/slider.css";
import "../App.css";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="cm-position-absolute banner-slider-content">
            <h2>Welcome to Aspan Amazing Blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud commodo consequat.</p>
            <a href="/#" className="cm-prime-btn">Learn More</a>
          </div>
          <img src="./images/1.jpg" alt="yogesh"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cm-position-absolute banner-slider-content">
            <h2>Welcome to Aspan Amazing Blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud commodo consequat.</p>
            <a href="/#" className="cm-prime-btn">Learn More</a>
          </div>
          <img src="./images/2.jpg" alt="yogesh"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cm-position-absolute banner-slider-content">
            <h2>Welcome to Aspan Amazing Blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud commodo consequat.</p>
            <a href="/#" className="cm-prime-btn">Learn More</a>
          </div>
          <img src="./images/3.jpg" alt="yogesh"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cm-position-absolute banner-slider-content">
            <h2>Welcome to Aspan Amazing Blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud commodo consequat.</p>
            <a href="/#" className="cm-prime-btn">Learn More</a>
          </div>
          <img src="./images/4.jpg" alt="yogesh"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
