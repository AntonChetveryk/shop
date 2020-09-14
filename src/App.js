import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

// Components
import AddProduct from "./containers/add-product";
import Cart from "./containers/cart";
import ProductList from "./containers/product-list";
import Layout from "./components/Layout";
import { personsFetchData } from "./actions/products.action";

// CSS
import "./App.css";

class App extends Component {
  componentDidMount() {
    const { personsFetchData } = this.props;
    personsFetchData("https://swapi.dev/api/people");
  }

  render() {
    return (
      <Router basename="/shop">
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

const mapStateToProps = (state) => ({ ...state.products, ...state.cart });
const mapDispatchToProps = { personsFetchData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
