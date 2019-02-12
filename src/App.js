import React, { Component } from "react";
import Logo from "./Logo";
import Toolbar from "./ToolBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="HeadContainer">
        <Toolbar />
        <Logo />
      </div>
    );
  }
}

export default App;
