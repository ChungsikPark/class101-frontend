import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Step3.scss";

export class Step3 extends Component {
  goToBefore = () => {
    this.props.history.push("/makeclass/2");
  };

  goToAfter = () => {
    this.props.history.push("/makeclass/4");
  };

  handlePreClick = () => {
    this.goToBefore();
    this.props.changePreStep();
  };

  handleNextClick = () => {
    this.goToAfter();
    this.props.changeNextStep();
  };
  render() {
    return (
      <div className="contents-wrapper3">
        <div className="progress-bar">
          <div className="progress-bar-status"></div>
        </div>
        <div className="make-class-contents">
          <div className="contents-title-flex">
            <div className="contents-title-wrapper">
              <div className="contents-title">
                <div className="contents-title-text">02 클래스 소개하기</div>
                <div className="contents-title-sub">
                  <h3 className="contents-title-sub-text">클래스 소개</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="contents-body-flex">
            <div className="contents-body-left-wrapper">
              <div className="contents-body-left">
                <div className="class-introduce-info">클래스 소개하기</div>
                <div className="class-introduce-info-text">
                  블로그 쓰듯이 이 페이지에 여러분 클래스의 매력을 맘껏
                  표현해주세요.
                </div>
                <div></div>
                <div className="class-introduce-btn-box">
                  <button
                    className="class-introduce-pre-btn"
                    type="submit"
                    onClick={this.handlePreClick}
                  >
                    <span className="class-introduce-pre-btn-text">이전</span>
                  </button>
                  <button
                    className="class-introduce-next-btn"
                    type="submit"
                    onClick={this.handleNextClick}
                  >
                    <span className="class-introduce-next-btn-text">다음</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="contents-body-right-wrapper">
              <div className="contents-body-right-class-introduce">
                <div className="class-introduce-guide-wrapper">
                  <div className="class-introduce-guide">
                    <div className="class-introduce-guide-title">
                      클래스 소개
                    </div>
                    <div className="class-introduce-guide-text">
                      제일 중요한 부분이에요! 이것만 넘기면 나머지는 누워서
                      떡먹기, 식은 죽 먹기!
                      <br />
                      <br />
                      클래스를 통해 무엇을 배우게 될지, 완강 후에는 어떻게
                      활용할 수 있을지를 보여주고 수강생분들께 어필해보세요.
                    </div>
                  </div>
                </div>
                <div className="class-introduce-link-wrapper">
                  <span
                    className="class-introduce-emoji"
                    role="img"
                    aria-label="headache"
                  >
                    😵
                  </span>
                  <div className="class-introduce-link-title">
                    머릿속이 하얗고 시작이 막막하다면
                  </div>
                  <span className="class-introduce-a-flex">
                    <a className="class-introduce-link" href="/makeclass/3">
                      <span className="class-introduce-link-text">
                        현직 PD가 알려주는 클래스 소개 공략법 보기
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Step3);
