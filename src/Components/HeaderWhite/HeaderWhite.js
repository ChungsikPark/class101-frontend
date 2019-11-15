import React, { Component } from "react";
import "./Header2.scss";
import { Link } from "react-router-dom";

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
          <div className="main-nav-login-box">
            {/* <Link to={"/signin"} className="main-nav-login">
              로그인
            </Link>
            <Link to={"/signup"} className="main-nav-signup">
              회원가입
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderWhite;
