import React, { Component } from "react";
import "./IntroStep.scss";

export class IntroStep3 extends Component {
  goToMake() {
    this.props.history.push("/makeclass/makeclass1");
  }
  render() {
    return (
      <div className="intro-body3">
        <div className="intro-content">
          <div className="intro-logo">
            <div className="main-logo">WECODE</div>
            <div className="main-101">IOI</div>
            <div className="creator">creator</div>
          </div>
          <div className="intro-contents">
            <div className="intro-contents-title">
              누구에게,
              <br />
              무엇을 팔 것인가!
            </div>
            <div className="intro-contents-state">
              지갑을 열기 위해서는 돈을 내고 살만한 확실한 가치가 보여야 합니다.
              <br />
              내 클래스만의 차별점을 잘 드러내주세요.
              <br />
              <br />
              자, 그럼 예비 수강생분들과 교감을 시작하러 가볼까요?
            </div>
            <button onClick={this.goToMake.bind(this)} className="intro-button">
              시작하기!
            </button>
          </div>
        </div>
        <div className="intro-img3" />
      </div>
    );
  }
}

export default IntroStep3;
