import React, { Component } from "react";
import HeaderWhite from "Components/HeaderWhite";
import NormalLogin from "Components/SignIn/NormalLogin";
import SocialLogin from "Components/SignIn/SocialLogin";
import "./SignIn.scss";

export class SignIn extends Component {
  render() {
    return (
      <>
        <HeaderWhite />
        <div className="sign-in-wrapper">
          <div className="sign-in">
            <h1>로그인</h1>
            <NormalLogin />
            <hr></hr>
            <SocialLogin />
          </div>
        </div>
      </>
    );
  }
}

export default SignIn;
