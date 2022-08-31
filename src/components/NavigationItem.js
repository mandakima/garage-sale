import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/main.css";

const NavigationItem = (props) => {
  return (
    <div>
      <NavLink className="navigation-link" to={props.path}>
        {props.title}
      </NavLink>
    </div>
  );
};

export default NavigationItem;