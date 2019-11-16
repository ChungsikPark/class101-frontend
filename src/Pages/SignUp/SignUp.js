import React, { Component } from "react";
import HeaderWhite from "Components/HeaderWhite";
import Register from "Components/SignUp/Register";
import SocialSignUp from "Components/SignUp/SocialSignUp";
import SignUpFooter from "Components/SignUp/SignUpFooter";
import "./SignUp.scss";

export class SignUp extends Component {
  render() {
    return (
      <>
        <HeaderWhite />
        <div className="sign-up-padding-box">
          <div className="sign-up-wrapper">
            <div className="sign-up">
              <div className="contents-wrapper">
                <div className="sign-up-contents">
                  <h1>회원가입</h1>
                  <Register />
                  <hr></hr>
                  <SocialSignUp />
                </div>
              </div>
            </div>
          </div>
          <SignUpFooter />
        </div>
      </>
    );
  }
}

export default SignUp;
