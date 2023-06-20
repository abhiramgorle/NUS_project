import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Homesecond.css";
// import required modules
import { Autoplay,EffectCoverflow, Pagination } from "swiper";


import pic1 from "../Assests/1.png"
import pic2 from "../Assests/2.png"
import pic3 from "../Assests/3.png"
import pic4 from "../Assests/4.png"
import pic5 from "../Assests/5.png"
import pic6 from "../Assests/6.png"
import pic7 from "../Assests/7.png"
import pic8 from "../Assests/8.png"
import pic9 from "../Assests/9.png"
import pic10 from "../Assests/10.png"
import pic11 from "../Assests/11.png"
import pic12 from "../Assests/12.png"
import pic13 from "../Assests/13.png"
import pic14 from "../Assests/14.png"
import pic15 from "../Assests/15.png"
import pic16 from "../Assests/16.png"

const Homesecond = () => {
  return (
    <div className="Homesecondd">
      <div className="secondcontent">
                <h2>
                    Select from our wide range of customizable templates
                </h2>
                
    </div>
        <div className="slidershowimg">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={pic1} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic4} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic5} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic6} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic7} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic8} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic9} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic10} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic11} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic12} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic13} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic14} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic15} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic16} alt="sampleimgs" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic9} alt="sampleimgs" />
        </SwiperSlide>
      </Swiper>
    </div>
    
    </div>
  )
}

export default Homesecond
