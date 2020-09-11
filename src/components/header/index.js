import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// CSS
import "./header.css";

function Header(props) {
  return (
    <header className="App-header">
      <h1 className="App-title">
        <Link to="/">My simple shop</Link>
      </h1>
      <Link to="add-product" className="add-product">
        Add product
      </Link>
      <div className="app-cart">
        <Link to="/cart">{`Cart ${props.inCart.length}`}</Link>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({ ...state.cart });

export default connect(mapStateToProps)(Header);
