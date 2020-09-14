import React, { Component } from "react";
import { connect } from "react-redux";
import Handler from "../handler";
import { removeFromCart } from "../../../actions/cart.actions";

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
    const { i } = this.props;
    const { counter } = this.state;

    if (counter < i.available) {
      this.setState((state) => {
        return { counter: state.counter + 1 };
      });
    } else {
      alert("This item is not in the store");
    }
  };

  reduceCounter = () => {
    if (this.state.counter > 1) {
      this.setState((state) => {
        return { counter: state.counter - 1 };
      });
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
