import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { slider1, slider2, slider3, slider4 } from "../../assets";
import hr1 from "../../assets/hr1.jpg";
import hr2 from "../../assets/hr2.jpg";
import hr3 from "../../assets/hr3.jpg";
import hr4 from "../../assets/hr4.jpg";
import hr5 from "../../assets/hr5.jpg";
import hr6 from "../../assets/hr6.jpg";
import hr7 from "../../assets/hr7.jpg";
import hr8 from "../../assets/hr8.jpg";
import hr9 from "../../assets/hr9.jpg";
import hr10 from "../../assets/hr10.jpg";
import hr11 from "../../assets/hr11.jpg";
import hr12 from "../../assets/hr12.jpg";
import hr13 from "../../assets/hr13.jpg";
import hr14 from "../../assets/hr14.jpg";
import hr15 from "../../assets/hr15.jpg";
import hr16 from "../../assets/hr16.jpg";
import hr17 from "../../assets/hr17.jpg";
import hr18 from "../../assets/hr18.jpg";
import hr19 from "../../assets/hr19.jpg";
import hr20 from "../../assets/hr20.jpg";
import hr21 from "../../assets/hr21.jpg";
import hr22 from "../../assets/hr22.jpg";
import hr23 from "../../assets/hr23.jpg";
import hr24 from "../../assets/hr24.jpg";
import hr25 from "../../assets/hr25.jpg";
import hr26 from "../../assets/hr26.jpg";
import hr27 from "../../assets/hr27.jpg";
import hr28 from "../../assets/hr28.jpg";
import devitanew1 from "../../assets/devitanew1.jpg";
import devitanew2 from "../../assets/devitanew2.jpg";
import devitanew3 from "../../assets/devitanew3.jpg";
import devitanew4 from "../../assets/devitanew4.jpg";
import hr29 from "../../assets/hr29.jpg";


import "./Carousel.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={hr1} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr2} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr3} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr4} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr5} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr6} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr7} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr8} alt="not found" />
        </SwiperSlide>
        
      </Swiper>
      <br/>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={hr9} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr10} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr11} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr12} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr13} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr14} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr15} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr16} alt="not found" />
        </SwiperSlide>
        
      </Swiper>
      <br/>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={hr17} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr18} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr19} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr20} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr21} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr22} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr23} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr24} alt="not found" />
        </SwiperSlide>
        
      </Swiper>
      <br/>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={devitanew1} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={devitanew2} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={devitanew3} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={devitanew4} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr25} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr26} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr28} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr27} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hr29} alt="not found" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
