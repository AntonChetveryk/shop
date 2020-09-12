import React, { Component } from "react";
import { connect } from "react-redux";
import Handler from "../handler";
import { removeFromCart } from "../../../actions/cart.actions";
import {
  reduceAvailable,
  increaseAvailable,
} from "../../../actions/products.action";

import "./cart-item.css";

class CartItem extends Component {
  state = {
    counter: 1,
  };

  onClick = () => {
    const { i, removeFromCart } = this.props;
    removeFromCart(i);
  };

  increaseCounter = () => {
    const { i, reduceAvailable } = this.props;
    if (i.available > 0) {
      this.setState(
        (state) => {
          return { counter: state.counter + 1 };
        },
        () => reduceAvailable(i)
      );
    } else {
      alert("This item is not in the store");
    }
  };

  reduceCounter = () => {
    const { i, increaseAvailable } = this.props;
    if (this.state.counter > 0) {
      this.setState(
        (state) => {
          return { counter: state.counter - 1 };
        },
        () => increaseAvailable(i)
      );
    }
  };

  render() {
    const { i } = this.props;
    return (
      <div className="cart_list_item">
        <p>{i.name}</p>
        <Handler
          counter={this.state.counter}
          increaseCounter={this.increaseCounter}
          reduceCounter={this.reduceCounter}
        />
        <button className="delete-btn" onClick={this.onClick}>
          Delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.cart });
const mapDispatchToProps = {
  removeFromCart,
  reduceAvailable,
  increaseAvailable,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
