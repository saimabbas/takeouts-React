import React, { useEffect } from "react";
import "./restraunts.css";
import Header from "../../components/header/header";
import StoreCard from "../../components/storeCard/storeCard";
import Footer from "../../components/footer/footer";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import DishesSlider from "../../components/dishesSlider/dishesSlider";
import AdSlider from "../../components/adSlider/adSlider";
import StoresSlider from "../../components/storesSlider/storesSlider";
const Restraunts = () => {
  SwiperCore.use([Navigation, Autoplay]);

  return (
    <div className="restraunts">
      <Header />
      <DishesSlider />
      <AdSlider />
      <div className="storesListContainer">
        <div className="box">
          <StoresSlider />
          <div className="storesContentBox">
            <div className="storeControl">
              <h1 className="storeMainHeading cursiveFont">All Stores</h1>
            </div>
            <div className="storeGrid">
              <StoreCard
                img="https://images.deliveryhero.io/image/fd-pk/LH/n6vj-listing.jpg"
                restrauntName="Restraunt Name 1"
                description="Description will go here 1"
                deliveryTime="15 min"
                saleOfferText="10% Off on all Dishes"
                showPromoted={true}
                showFreeDelivery={true}
              />
              <StoreCard
                img="https://images.deliveryhero.io/image/fd-pk/LH/u1uo-listing.jpg"
                restrauntName="Restraunt Name 2"
                description="Description will go here 2"
                deliveryTime="15 min"
                saleOfferText="20% Off on all Dishes"
              />
              <StoreCard
                img="https://images.deliveryhero.io/image/fd-pk/LH/p78t-listing.jpg"
                restrauntName="Restraunt Name 3"
                description="Description will go here 3"
                deliveryTime="15 min"
                saleOfferText="30% Off on all Dishes"
                showPromoted={true}
                showFreeDelivery={true}
              />
              <StoreCard
                img="https://images.deliveryhero.io/image/fd-pk/LH/l7ig-listing.jpg"
                restrauntName="Restraunt Name 4"
                description="Description will go here 4"
                deliveryTime="15 min"
                saleOfferText="10% Off on all Dishes"
              />
              <StoreCard
                img="https://images.deliveryhero.io/image/fd-pk/LH/l92l-listing.jpg"
                restrauntName="Restraunt Name 5"
                description="Description will go here 5"
                deliveryTime="15 min"
                saleOfferText="10% Off on all Dishes"
              />
              <StoreCard
                img="https://images.deliveryhero.io/image/fd-pk/LH/n6vj-listing.jpg"
                restrauntName="Restraunt Name 1"
                description="Description will go here 1"
                deliveryTime="15 min"
                saleOfferText="10% Off on all Dishes"
                showPromoted={true}
                showFreeDelivery={true}
              />
              <StoreCard
                img="https://images.deliveryhero.io/image/fd-pk/LH/u1uo-listing.jpg"
                restrauntName="Restraunt Name 2"
                description="Description will go here 2"
                deliveryTime="15 min"
                saleOfferText="20% Off on all Dishes"
              />
              <StoreCard
                img="https://images.deliveryhero.io/image/fd-pk/LH/p78t-listing.jpg"
                restrauntName="Restraunt Name 3"
                description="Description will go here 3"
                deliveryTime="15 min"
                saleOfferText="30% Off on all Dishes"
                showPromoted={true}
                showFreeDelivery={true}
              />
              <StoreCard
                img="https://images.deliveryhero.io/image/fd-pk/LH/l7ig-listing.jpg"
                restrauntName="Restraunt Name 4"
                description="Description will go here 4"
                deliveryTime="15 min"
                saleOfferText="10% Off on all Dishes"
              />
              <StoreCard
                img="https://images.deliveryhero.io/image/fd-pk/LH/l92l-listing.jpg"
                restrauntName="Restraunt Name 5"
                description="Description will go here 5"
                deliveryTime="15 min"
                saleOfferText="10% Off on all Dishes"
              />
              <StoreCard
                img="https://images.deliveryhero.io/image/fd-pk/LH/n6vj-listing.jpg"
                restrauntName="Restraunt Name 1"
                description="Description will go here 1"
                deliveryTime="15 min"
                saleOfferText="10% Off on all Dishes"
                showPromoted={true}
                showFreeDelivery={true}
              />
              <StoreCard
                img="https://images.deliveryhero.io/image/fd-pk/LH/u1uo-listing.jpg"
                restrauntName="Restraunt Name 2"
                description="Description will go here 2"
                deliveryTime="15 min"
                saleOfferText="20% Off on all Dishes"
              />
              <StoreCard
                img="https://images.deliveryhero.io/image/fd-pk/LH/p78t-listing.jpg"
                restrauntName="Restraunt Name 3"
                description="Description will go here 3"
                deliveryTime="15 min"
                saleOfferText="30% Off on all Dishes"
                showPromoted={true}
                showFreeDelivery={true}
              />
              <StoreCard
                img="https://images.deliveryhero.io/image/fd-pk/LH/l7ig-listing.jpg"
                restrauntName="Restraunt Name 4"
                description="Description will go here 4"
                deliveryTime="15 min"
                saleOfferText="10% Off on all Dishes"
              />
              <StoreCard
                img="https://images.deliveryhero.io/image/fd-pk/LH/l92l-listing.jpg"
                restrauntName="Restraunt Name 5"
                description="Description will go here 5"
                deliveryTime="15 min"
                saleOfferText="10% Off on all Dishes"
              />
            </div>
            <div className="showMoreBtn">
              <button>Show More</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Restraunts;
