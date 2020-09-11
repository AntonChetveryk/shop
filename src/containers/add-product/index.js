import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewProduct } from "../../actions/products.action";

import "./add.css";

export class AddProduct extends Component {
  state = {
    name: "",
    price: "",
    available: "",
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    const { name, price, available } = this.state;
    const { history } = this.props;
    e.preventDefault();
    if ((name, price, available)) {
      this.props.addNewProduct({
        name,
        price: Number(price),
        available: Number(available),
      });
      history.push("/");
    } else {
      alert("Fill in all the gaps");
    }
  };

  render() {
    return (
      <div className="form-container">
        <form className="form" onSubmit={this.onSubmit}>
          <label className="form-input">
            <input type="text" name="name" onChange={this.onChange}></input>
            name
          </label>
          <label className="form-input">
            <input type="number" name="price" onChange={this.onChange}></input>
            Price
          </label>
          <label className="form-input">
            <input
              type="number"
              name="available"
              onChange={this.onChange}
            ></input>
            available
          </label>
          <button className="form-btn">Add product</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.products, ...state.cart });
const mapDispatchToProps = { addNewProduct };

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
