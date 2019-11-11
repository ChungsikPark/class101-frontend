import React, { Component } from "react";
import "./SocialLogin.scss";
import facebook from "Img/facebook_logo.png";
import kakao from "Img/kakao_logo.png";

export class SocialLogin extends Component {
  render() {
    return (
      <div className="social-login">
        <button type="button" className="facebook-btn">
          <span className="btn-text">
            <img src={facebook} alt="" />
            <span>페이스북으로 시작하기</span>
          </span>
        </button>
        <button type="button" className="kakao-btn">
          <span className="btn-text">
            <img src={kakao} alt="" />
            <span>카카오로 시작하기</span>
          </span>
        </button>
      </div>
    );
  }
}

export default SocialLogin;
