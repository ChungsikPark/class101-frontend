import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HeaderWhite.scss";

export class HeaderWhite extends Component {
  render() {
    return (
      <div className="main-header2">
        <div className="main-nav">
          <div className="main-nav-left">
            <Link to={"/"} className="main-logo">
              >WECODE
            </Link>
            <div className="main-101">IOI</div>
            <div className="creator">creator</div>
            <div className="main-nav-tab"></div>
          </div>
          <div className="main-nav-login-box"></div>
        </div>
      </div>
    );
  }
}

export default HeaderWhite;
