import React from "react";
import "./storeCard.css";
import { MdWatchLater } from "react-icons/md";
import FreeDelivery from '../../assets/free-delivery.png'
const StoreCard = (props) => {
  return (
    <div className="storeCard">
      <div className="storeCardTop">
        <img src={props.img} alt="" />
        <div>{props.showPromoted ? <span>PROMOTED</span> : null}</div>
      </div>
      <div className="storeCardBottom">
        <h1 className="cursiveFont">{props.restrauntName}</h1>
        <h2>{props.description}</h2>
        <div>
          <h3>
            <MdWatchLater />
            {props.deliveryTime}
          </h3>
          {props.showFreeDelivery ? (
            <span>
              {/* <img src={FreeDelivery} alt="" /> */}
              <h4>Free Delivery</h4>
            </span>
          ) : null}
        </div>
        <span>{props.saleOfferText}</span>
      </div>
    </div>
  );
};

export default StoreCard;
