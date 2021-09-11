import React from "react";
import "./dishesCard.css";
const DishesCard = (props) => {
  return (
    <div className="dishesSlideContent">
      <img src={props.img} alt="" />
      <p>{props.dish}</p>
    </div>
  );
};

export default DishesCard;
