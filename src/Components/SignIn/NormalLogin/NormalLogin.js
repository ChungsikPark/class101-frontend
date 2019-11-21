import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import InputArea from "./InputArea";
import "./NormalLogin.scss";

export class NormalLogin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleOnClick = event => {
    event.preventDefault();
    console.log(this.state);
    const url = "";
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);
        if (response.SUCCESS === "200") {
          this.props.history.push("/myclass");
        } else {
          console.log("error");
        }
      });
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="normal-login">
        <InputArea
          labelText="이메일"
          inputType="text"
          inputName="email"
          placeholder="example@naver.com"
          alertMessage="메일을 입력해주세요."
          handleInput={this.handleInput}
        />
        <InputArea
          labelText="비밀번호"
          inputType="password"
          inputName="password"
          placeholder="********"
          alertMessage="패스워드를 입력해주세요."
          handleInput={this.handleInput}
        />
        <div className="clearfix">
          <a className="clear-left" href="/">
            비밀번호를 잊으셨나요?
          </a>
          <a className="clear-right" href="/signup">
            회원 가입하기
          </a>
        </div>
        <button className="login-btn" onClick={this.handleOnClick}>
          <span className="btn-text">로그인</span>
        </button>
      </div>
    );
  }
}

export default withRouter(NormalLogin);
