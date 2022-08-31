import React from "react";
import "./../styles/main.css";

const NavigationItemsContainer = (props) => {
  return <div className="navigation-items-container"> {props.children} </div>;
};

export default NavigationItemsContainer;