import React, { Component } from "react";
import "./SignIn.scss";
import NormalLogin from "Components/SignIn/NormalLogin";
import SocialLogin from "Components/SignIn/SocialLogin";

export class SignIn extends Component {
  render() {
    return (
      <div className="sign-in-wrapper">
        <div className="sign-in">
          <h1>로그인</h1>
          <NormalLogin />
          <hr></hr>
          <SocialLogin />
        </div>
      </div>
    );
  }
}

export default SignIn;
