import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Components
import SideBar from "./components/sidebar";
import Cart from "./containers/cart";
import ProductList from "./containers/product-list";

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
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">
                <Link to="/">My simple shop</Link>
              </h1>
            </header>
            <div className="App-wrapper">
              <SideBar />
              <Route exact path="/" component={ProductList} />
              <Route path="/cart" component={Cart} />
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
