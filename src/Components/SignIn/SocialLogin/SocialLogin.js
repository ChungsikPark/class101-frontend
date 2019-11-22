import React, { Component } from "react";
import google from "Img/google_logo.png";
import kakao from "Img/kakao_logo.png";
import "./SocialLogin.scss";

export class SocialLogin extends Component {
  componentDidMount() {
    window.Kakao.init("5f0c4b8d9015f1db24824c0dfc044962");
  }

  loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: function(authObj) {
        alert(JSON.stringify(authObj));
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      }
    });
  };

  render() {
    return (
      <div className="social-login">
        <button type="button" className="google-btn">
          <span className="btn-text">
            <img src={google} alt="" />
            <span>구글로 시작하기</span>
          </span>
        </button>
        <button
          type="button"
          className="kakao-btn"
          onClick={this.loginWithKakao}
        >
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
