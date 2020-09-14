import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cart.actions";

import "./product-list.css";

export class ProductList extends Component {
  state = {
    value: "name",
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({ value: value });
  };

  onClick = (i) => {
    const { addToCart, inCart, history } = this.props;
    const isAdded = inCart.find((item) => item.name === i.name);
    if (!isAdded) {
      addToCart(i);

      history.push("/cart");
    } else {
      alert("Product has already been added");
    }
  };

  renderProducts() {
    const { products } = this.props;
    const filteredArray = (value) => {
      if (value === "name") {
        return products.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        return products.sort((a, b) => {
          return a[value] - b[value];
        });
      }
    };

    return filteredArray(this.state.value).map((i) => (
      <div className="product_list_item" key={i.id}>
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
    return (
      <div>
        <div className="select-container">
          <label>
            <span className="sort">Sort:</span>
            <select id="select" onChange={this.onChange}>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="available">Availability</option>
            </select>
          </label>
        </div>
        <div className="App-product_list">{this.renderProducts()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.products, ...state.cart });
const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
