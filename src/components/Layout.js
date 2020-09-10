import React from "react";
import SideBar from "./sidebar";
import Header from "./header";

export default function Layout(props) {
  return (
    <div className="App">
      <Header />
      <div className="App-wrapper">
        <SideBar />
        {props.children}
      </div>
    </div>
  );
}
