import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

export const SideBar = (props) => {
  return (
    <div className="App-sidebar">
      <nav className="App-sidebar-nav">
        <NavLink exact to="/" activeClassName="active">
          Product
        </NavLink>
        <NavLink to="/cart" activeClassName="active">
          Cart
        </NavLink>
        <NavLink to="/add-product" activeClassName="active">
          Add product
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
