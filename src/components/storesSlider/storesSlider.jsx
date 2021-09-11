import React from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import StoreCard from "../storeCard/storeCard";
import "./storesSlider.css";
const StoresSlider = () => {
  SwiperCore.use([Navigation, Autoplay]);
  return (
    <div className="storesContentBox">
      <div className="storeControl">
        <h1 className="cursiveFont storeMainHeading">Late Night Food</h1>
        <div>
          <a>See All</a>

          <span className="storeLeft leftRightButtonStores">
            <MdNavigateBefore />
          </span>
          <span className="storeRight leftRightButtonStores">
            <MdNavigateNext />
          </span>
        </div>
      </div>
      <Swiper
      className='storesSlider'
        slidesPerView="1"
        loop="true"
        grabCursor="true"
        navigation={{
          nextEl: ".storeRight",
          prevEl: ".storeLeft",
        }}
        spaceBetween={25}
        speed={600}
        breakpoints={{
          1000: {
            slidesPerView: "3",
          },
          600: {
            slidesPerView: "2",
          },
        }}
      >
        <SwiperSlide>
          <StoreCard
            img="https://images.deliveryhero.io/image/fd-pk/LH/n6vj-listing.jpg"
            restrauntName="Restraunt Name 1"
            description="Description will go here 1"
            deliveryTime="15 min"
            saleOfferText="10% Off on all Dishes"
            showPromoted={true}
            showFreeDelivery={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <StoreCard
            img="https://images.deliveryhero.io/image/fd-pk/LH/u1uo-listing.jpg"
            restrauntName="Restraunt Name 2"
            description="Description will go here 2"
            deliveryTime="15 min"
            saleOfferText="20% Off on all Dishes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StoreCard
            img="https://images.deliveryhero.io/image/fd-pk/LH/p78t-listing.jpg"
            restrauntName="Restraunt Name 3"
            description="Description will go here 3"
            deliveryTime="15 min"
            saleOfferText="30% Off on all Dishes"
            showPromoted={true}
            showFreeDelivery={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <StoreCard
            img="https://images.deliveryhero.io/image/fd-pk/LH/l7ig-listing.jpg"
            restrauntName="Restraunt Name 4"
            description="Description will go here 4"
            deliveryTime="15 min"
            saleOfferText="10% Off on all Dishes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StoreCard
            img="https://images.deliveryhero.io/image/fd-pk/LH/l92l-listing.jpg"
            restrauntName="Restraunt Name 5"
            description="Description will go here 5"
            deliveryTime="15 min"
            saleOfferText="10% Off on all Dishes"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StoresSlider;
