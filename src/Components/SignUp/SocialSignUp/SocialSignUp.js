import React, { Component } from "react";
import facebook from "Img/facebook_logo.png";
import kakao from "Img/kakao_logo.png";
import "./SocialSignUp.scss";

export class SocialSignUp extends Component {
  render() {
    return (
      <div className="social-signup">
        <button type="button" className="facebook-signup-btn">
          <span className="facebook-signup-text">
            <img src={facebook} alt="" />
            <span>페이스북으로 로그인하기</span>
          </span>
        </button>
        <button type="button" className="kakao-signup-btn">
          <span className="kakao-signup-text">
            <img src={kakao} alt="" />
            <span>카카오로 로그인하기</span>
          </span>
        </button>
      </div>
    );
  }
}

export default SocialSignUp;
