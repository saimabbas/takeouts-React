import React from "react";
import "./storeCard.css";
import { MdAccessTime } from "react-icons/md";
import FreeDelivery from "../../assets/free-delivery.png";
const StoreCard = (props) => {
  return (
    <div className="storeCard">
      <div className="storeCardTop">
        <img src={props.img} alt="" />
        <div>{props.showPromoted ? <span>PROMOTED</span> : null}</div>
      </div>
      <div className="storeCardBottom">
        <div>
          <h1 className="cursiveFont">{props.restrauntName}</h1>
          <h3>
            <MdAccessTime />
            {props.deliveryTime}
          </h3>
        </div>
        <div>
          <h2>{props.description}</h2>
          {props.showFreeDelivery ? (
            <span>
              {/* <img src={FreeDelivery} alt="" /> */}
              <h4>Free Delivery</h4>
            </span>
          ) : null}
        </div>
        {/* <div> */}
        {/* <h3>
            <MdAccessTime />
            {props.deliveryTime}
          </h3> */}
        {/* {props.showFreeDelivery ? (
            <span>
              <img src={FreeDelivery} alt="" />
              <h4>Free Delivery</h4>
            </span>
          ) : null} */}
        {/* </div> */}
        {props.showSaleOffer ? <span>{props.saleOfferText}</span> : null}
      </div>
    </div>
  );
};

export default StoreCard;
