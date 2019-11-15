import React, { Component } from "react";
import "./IntroStep.scss";

export class IntroStep2 extends Component {
  goToNext() {
    this.props.history.push("/intro/intro3");
  }
  render() {
    return (
      <div className="intro-body2">
        <div className="intro-content">
          <div className="intro-logo">
            <div className="main-logo">WECODE</div>
            <div className="main-101">IOI</div>
            <div className="creator">creator</div>
          </div>
          <div className="intro-contents">
            <div className="intro-contents-title">
              가볍지만,
              <br />
              진지하게
            </div>
            <div className="intro-contents-state">
              성의 없고 준비 없는 도전은 무의미해요.
              <br />
              나만의 매력을 똑똑하게 발산하고 지나칠 사람들을 사로잡아요!
            </div>
            <button onClick={this.goToNext.bind(this)} className="intro-button">
              다음
            </button>
          </div>
        </div>
        <div className="intro-img2" />
      </div>
    );
  }
}

export default IntroStep2;
