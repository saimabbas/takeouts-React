import React from "react";
import "./adCard.css";
const AdCard = (props) => {
  return (
    <div className="adSlideContent">
      <div className="adTextBox">
        <h1 className="cursiveFont">{props.heading}</h1>
        <p>{props.subHeading}</p>
      </div>
      <img src={props.img} alt="" />
    </div>
  );
};

export default AdCard;
