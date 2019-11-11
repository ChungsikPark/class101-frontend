import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./IntroStep.scss";

export class IntroStep1 extends Component {
  goToNext() {
    this.props.history.push("/intro/intro2");
  }
  render() {
    return (
      <div className="intro-body1">
        <div className="intro-content">
          <div className="intro-logo">
            <div className="main-logo">WECODE</div>
            <div className="main-101">IOI</div>
            <div className="creator">creator</div>
          </div>
          <div className="intro-contents">
            <div className="intro-contents-title">
              클래스개설을
              <br />
              시작합니다!
            </div>
            <div className="intro-contents-state">
              겁먹지 마세요. 클래스를 개설하는것은 즐겁고 설래는일입니다.
              <br />
              여러분의 끼와 재능을 마음껏 뽐내고 기부해주세요. 저희가
              지지하겠습니다 :)
            </div>
            <button onClick={this.goToNext.bind(this)} className="intro-button">
              다음
            </button>
          </div>
        </div>
        <div className="intro-img1" />
      </div>
    );
  }
}

export default IntroStep1;
