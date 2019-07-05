import React, { Component } from "react";
import Routes from "./route/routes";
import NavBar from "./NavBar/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes />
      </>
    );
  }
}

export default App;
