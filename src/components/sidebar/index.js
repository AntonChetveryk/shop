import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export const SideBar = (props) => {
  return (
    <div className="App-sidebar">
      <nav className="App-sidebar-nav">
        <Link to="/" className="active">
          Product
        </Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </div>
  );
};

export default SideBar;
