import React from "react";
import DishesCard from "../dishesCard/dishesCard";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "./dishesSlider.css";

const DishesSlider = () => {
  SwiperCore.use([Navigation, Autoplay]);
  return (
    <div className="dishesSliderBox">
      <div className="box">
        <div className="dishesSliderContentBox">
          <span className="dishesL leftRightButton">
            <MdNavigateBefore />
          </span>
          <Swiper
            className="dishesSlider"
            loop="true"
            slidesPerView="3.5"
            navigation={{
              nextEl: ".dishesR",
              prevEl: ".dishesL",
            }}
            grabCursor="true"
            breakpoints={{
              1000: {
                slidesPerView: "10",
              },
              600: {
                slidesPerView: "5",
              },
            }}
            speed={600}
          >
            <SwiperSlide>
              <DishesCard img="https://images.deliveryhero.io/image/fd-pk/LH/n6vj-listing.jpg" dish="Dish 1" />
            </SwiperSlide>
            <SwiperSlide>
              <DishesCard img="https://images.deliveryhero.io/image/fd-pk/LH/u1uo-listing.jpg" dish="Dish 2" />
            </SwiperSlide>
            <SwiperSlide>
              <DishesCard img="https://images.deliveryhero.io/image/fd-pk/LH/p78t-listing.jpg" dish="Dish 3" />
            </SwiperSlide>
            <SwiperSlide>
              <DishesCard img="https://images.deliveryhero.io/image/fd-pk/LH/l7ig-listing.jpg" dish="Dish 4" />
            </SwiperSlide>
            <SwiperSlide>
              <DishesCard img="https://images.deliveryhero.io/image/fd-pk/LH/l92l-listing.jpg" dish="Dish 1" />
            </SwiperSlide>
            <SwiperSlide>
              <DishesCard img="https://images.deliveryhero.io/image/fd-pk/LH/p78t-listing.jpg" dish="Dish 2" />
            </SwiperSlide>
            <SwiperSlide>
              <DishesCard img="https://images.deliveryhero.io/image/fd-pk/LH/n6vj-listing.jpg" dish="Dish 3" />
            </SwiperSlide>
            <SwiperSlide>
              <DishesCard img="https://images.deliveryhero.io/image/fd-pk/LH/u1uo-listing.jpg" dish="Dish 4" />
            </SwiperSlide>
            <SwiperSlide>
              <DishesCard img="https://images.deliveryhero.io/image/fd-pk/LH/p78t-listing.jpg" dish="Dish 1" />
            </SwiperSlide>
            <SwiperSlide>
              <DishesCard img="https://images.deliveryhero.io/image/fd-pk/LH/l7ig-listing.jpg" dish="Dish 2" />
            </SwiperSlide>
            <SwiperSlide>
              <DishesCard img="https://images.deliveryhero.io/image/fd-pk/LH/l92l-listing.jpg" dish="Dish 3" />
            </SwiperSlide>
            <SwiperSlide>
              <DishesCard img="https://images.deliveryhero.io/image/fd-pk/LH/p78t-listing.jpg" dish="Dish 4" />
            </SwiperSlide>
          </Swiper>
          <span className='dishesR leftRightButton'>
            <MdNavigateNext />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DishesSlider;
