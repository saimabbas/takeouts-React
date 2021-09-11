import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "./adSlider.css";
import AdCard from "../adCard/adCard";

const AdSlider = () => {
  SwiperCore.use([Navigation, Autoplay]);
  return (
    <div className="adSliderBox">
      <div className="box">
        <div className="adSliderContentBox">
          {/* <span className={st.leftRightButtonAll + " " + "adLeft"}>
            <MdNavigateBefore />
          </span> */}
          <Swiper
            className="adSlider"
            loop="true"
            slidesPerView="1"
            navigation={{
              nextEl: ".adRight",
              prevEl: ".adLeft",
            }}
            grabCursor="true"
            autoplay={{
              delay: 5000,
              disableOnInteraction: "true",
            }}
            spaceBetween={25}
            speed={600}
            breakpoints={{
              1000: {
                slidesPerView: "2",
              },
            }}
          >
            <SwiperSlide className="adSlide2 adSlideAll">
              <AdCard
                heading="Get $0 delivery fees, reduced service fees & 5% back on pick
              up"
                subHeading="DashPass on Caviar"
                img="https://images.deliveryhero.io/image/fd-pk/LH/n6vj-listing.jpg"
              />
            </SwiperSlide>

            <SwiperSlide className="adSlide3 adSlideAll">
              <AdCard
                heading="Terms apply."
                subHeading=" Add an eligible Chase Co-brand card to get DashPass for free
              for a year."
                img="https://images.deliveryhero.io/image/fd-pk/LH/u1uo-listing.jpg"
              />
            </SwiperSlide>
          </Swiper>

          {/* <span className={st.leftRightButtonAll + " " + "adRight"}>
            <MdNavigateNext />
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default AdSlider;
