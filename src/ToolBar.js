import React, { Component } from "react";
import login from "./img/bloquear.png";

class Toolbar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-6" />
        <div className="col-sm-2">
            <img src={login} alt="login" />
        </div>
      </div>
    );
  }
}
export default Toolbar;
