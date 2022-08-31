import React, { useContext, useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { GlobalContext } from "../context/GlobalState";
import NavigationItemsContainer from "./NavigationItemsContainer";
import NavigationItem from "./NavigationItem";
import "./../styles/main.css";

const NavigationBar = () => {
  const { productsInCart } = useContext(GlobalContext);
  const [countItems, setCountItems] = useState(0);

  useEffect(() => {
    let count = 0;
    productsInCart.forEach((element) => {
      count += element.quantity;
    });
    setCountItems(count);
  }, [productsInCart]);

  const openCart = (e) => {
    e.stopPropagation();
    const cartBackground = document.getElementById("cart-background");
    const cart = document.getElementById("cart");

    if (window.innerWidth >= 700) {
      cartBackground.style.width = "60%";
      cart.style.width = "40%";
    } else {
      cartBackground.style.width = "40%";
      cart.style.width = "60%";
    }
  };

  return (
    <div id="navigation-bar">
      <h1 className="title">My Store</h1>
      <NavigationItemsContainer>
        <NavigationItem path="/" title="Home" />
        <NavigationItem path="/products" title="Products" />
        <div onClick={openCart} style={{ display: "flex" }}>
          <IoCartOutline className="cart-icon" />
          {countItems > 0 ? (
            <div className="cart-items-count">{countItems}</div>
          ) : (
            <></>
          )}
        </div>
      </NavigationItemsContainer>
    </div>
  );
};

export default NavigationBar;