import React, { Component } from "react";
import { connect } from "react-redux";

import "./add.css";

export class AddProduct extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <input type="text" name="model"></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.products, ...state.cart });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
