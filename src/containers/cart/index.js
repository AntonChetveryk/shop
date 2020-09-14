import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "./cart-item";
import "./cart.css";

class Cart extends Component {
  renderProducts() {
    const { inCart } = this.props;

    return inCart.map((i) => <CartItem i={i} key={i.id} />);
  }

  render() {
    return (
      <div className="cart-product_list">
        {this.props.inCart.length
          ? this.renderProducts()
          : "Your cart is empty :("}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.cart });

export default connect(mapStateToProps)(Cart);
