import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cart.actions";
import { reduceAvailable } from "../../actions/products.action";

import "./product-list.css";

export class ProductList extends Component {
  onClick = (i) => {
    const { addToCart, reduceAvailable, inCart } = this.props;
    const isAdded = inCart.find((item) => item.name === i.name);
    if (!isAdded) {
      addToCart(i);
      reduceAvailable(i);
    } else {
      alert("Product has already been added");
    }
  };

  renderProducts() {
    const { products } = this.props;

    return products.map((i, index) => (
      <div className="product_list_item" key={index}>
        <p>{i.name}</p>
        <p>Price: {i.price}</p>
        <p>{i.available > 0 ? "In stock" : "Sold out"}</p>
        <button
          className="add-to-cart-btn"
          onClick={() => this.onClick(i)}
          disabled={i.available <= 0}
        >
          Add to cart
        </button>
      </div>
    ));
  }

  render() {
    return <div className="App-product_list">{this.renderProducts()}</div>;
  }
}

const mapStateToProps = (state) => ({ ...state.products, ...state.cart });
const mapDispatchToProps = {
  addToCart,
  reduceAvailable,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
