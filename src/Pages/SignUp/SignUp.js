import React, { Component } from "react";
import Register from "Components/SignUp/Register";
import SocialSignUp from "Components/SignUp/SocialSignUp";
import SignUpFooter from "Components/SignUp/SignUpFooter";
import "./SignUp.scss";

export class SignUp extends Component {
  render() {
    return (
      <div className="sign-up-wrapper">
        <div className="sign-up">
          <div className="contents">
            <h1>회원가입</h1>
            <Register />
            <hr></hr>
            <SocialSignUp />
          </div>
        </div>
        <SignUpFooter />
      </div>
    );
  }
}

export default SignUp;
