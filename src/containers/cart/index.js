import React, { Component } from "react";
import { connect } from "react-redux";

import "./cart.css";

export class Cart extends Component {
  renderProducts() {
    const { inCart } = this.props;

    return inCart.map((i, index) => (
      <div className="product_list_item" key={index}>
        <p>{i.name}</p>
        <p>Price: {i.price}</p>
        <p>{i.available > 0 ? "In stock" : "Sold out"}</p>
        <button className="add-to-cart-btn">Delete</button>
      </div>
    ));
  }

  render() {
    return (
      <div className="App-product_list">
        {this.props.inCart.length
          ? this.renderProducts()
          : "Your cart is empty :("}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.cart });

export default connect(mapStateToProps)(Cart);
