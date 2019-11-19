import React, { Component } from "react";
import RegisterArea from "./RegisterArea";
import "./Register.scss";

export class Register extends Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    password2: "",
    isEssentialPath: true,
    isSelectionPath: true
  };

  handleOnClick = event => {
    event.preventDefault();
    console.log(this.state);
    const url = "";
    const data = {
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password
    };

    fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        if (response.SUCCESS === "200") {
          this.props.history.push("/");
        } else {
          console.log("error");
        }
      });
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePath = s => {
    this.setState({ [s]: !this.state[s] });
  };

  render() {
    console.log(this.state);
    let normalPath = "normal-path";
    let selectPath = "select-path";
    return (
      <div className="register">
        <RegisterArea
          labelText="이름"
          inputType="text"
          inputName="name"
          placeholder="홍길동"
          alertMessage="이름을 입력해주세요."
          handleInput={this.handleInput}
        />
        <RegisterArea
          labelText="이메일"
          inputType="text"
          inputName="email"
          placeholder="example@naver.com"
          alertMessage="메일을 입력해주세요."
          handleInput={this.handleInput}
        />
        <RegisterArea
          labelText="휴대폰 번호"
          inputType="text"
          inputName="phoneNumber"
          placeholder="-를 제외한 휴대폰 번호를 입력해주세요"
          alertMessage="휴대폰 번호를 입력해주세요."
          handleInput={this.handleInput}
        />
        <RegisterArea
          labelText="비밀번호 (8자 이상)"
          inputType="password"
          inputName="password"
          placeholder="********"
          alertMessage="패스워드를 입력해주세요."
          handleInput={this.handleInput}
        />
        <RegisterArea
          labelText="비밀번호 확인"
          inputType="password"
          inputName="password2"
          placeholder="********"
          alertMessage="패스워드 확인을 입력해주세요."
          handleInput={this.handleInput}
        />
        <div className="checkbox-wrapper">
          <label className=" cb-label">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              onClick={() => {
                this.handlePath("isEssentialPath");
              }}
            >
              <path
                className={this.state.isEssentialPath ? normalPath : selectPath}
                fill="#3E4042"
                fillRule="evenodd"
                d="M19 19H5V5h14v14zM5 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5z"
              ></path>
            </svg>
            <span className="cb-message">
              <a href="/signup">이용약관</a>
              &nbsp;및&nbsp;
              <a href="/signup">개인정보 처리방침</a>
              &nbsp;동의 (필수)
            </span>
          </label>
        </div>
        <div className="checkbox-wrapper">
          <label className=" cb-label">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              onClick={() => {
                this.handlePath("isSelectionPath");
              }}
            >
              <path
                className={this.state.isSelectionPath ? normalPath : selectPath}
                fill="#3E4042"
                fillRule="evenodd"
                d="M19 19H5V5h14v14zM5 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5z"
              />
            </svg>
            <span className="cb-message">
              이벤트 및 할인 소식 알림 동의 (선택)
            </span>
          </label>
        </div>
        <button className="signup-btn" onClick={this.handleOnClick}>
          <span className="signup-btn-text">가입하기</span>
        </button>
      </div>
    );
  }
}

export default Register;
