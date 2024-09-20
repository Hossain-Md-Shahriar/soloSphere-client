// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgImg1 from "../assets/images/carousel1.jpg";
import bgImg2 from "../assets/images/carousel2.jpg";
import bgImg3 from "../assets/images/carousel3.jpg";

export default function Carousel() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgImg1}
            text={"Get Your Web Development Projects done in minutes"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg2}
            text={"Get Your Graphics Design Projects done in minutes"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgImg3}
            text={"Start Your Digital Marketing Campaigns up n running"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
