import React from "react";
import "./header.css";
import Logo from "../../assets/logo3.svg";
import { MdMenu, MdExpandMore, MdSearch, MdShoppingCart } from "react-icons/md";
const Header = () => {
  return (
    <div className="header">
      <div className="headerTop">
        <div className="headerBox">
          <div className="headerLeft">
            <div className="headerMenu">
              <MdMenu />
              <img src={Logo} alt="" />
            </div>

            <div className="deliveryPickupBox deliveryPickupBoxMob">
              <input
                type="radio"
                name="deliveryPickup"
                id="deliveryTagID"
                defaultChecked={true}
              />
              <label htmlFor="deliveryTagID" className=" activedeliveryTag">
                Delivery
              </label>

              <input type="radio" name="deliveryPickup" id="pickupTagID" />
              <label htmlFor="pickupTagID" className="pickupTag">
                Pickup
              </label>
            </div>
            <h2 className="locationP lpMob">
              <span>
                ASAP <MdExpandMore />
              </span>{" "}
              <b>near</b>
              <span>
                303 East Wacker Drive <MdExpandMore />
              </span>
            </h2>

            {/* <a href="">Home</a>
           <a href="">Menu</a>
           <a href="">Become a rider</a>
           <a href="">Restraunts</a>
           <a href="">Business</a>
           <a href="">Login</a> */}
          </div>
          <div className="headerRight">
            <div className="searchBar">
              <MdSearch />
              <input
                type="text"
                placeholder="Search restaurants, food items ..."
              />
            </div>
            <div className="cart">
              <span>8</span>
              <MdShoppingCart />
            </div>
          </div>
        </div>
      </div>

      <div className="headerBottom">
        <div className="searchBar searchBarMob">
          <MdSearch />
          <input type="text" placeholder="Search restaurants, food items ..." />
        </div>
      </div>
    </div>
  );
};

export default Header;
