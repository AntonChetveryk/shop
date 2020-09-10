import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import AddProduct from "./containers/add-product";
import Cart from "./containers/cart";
import ProductList from "./containers/product-list";
import Layout from "./components/Layout";

// CSS
import "./App.css";

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="/add-product" component={AddProduct} />
          </Layout>
        </Switch>
      </Router>
    );
  }
}
