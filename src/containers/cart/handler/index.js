import React, { Component } from "react";
import { connect } from "react-redux";

import "./handler.css";

class Handler extends Component {
  render() {
    const { counter, increaseCounter, reduceCounter } = this.props;
    return (
      <div className="handler-wrapper">
        <div className="counter">{counter}</div>
        <div className="handler-btn-container">
          <div onClick={increaseCounter}>&#9650;</div>
          <div onClick={reduceCounter}>&#9660;</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.products, ...state.cart });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Handler);
