import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SVG from "Img/SVG.js";
import "./Step1.scss";

export class Step1 extends Component {
  state = {
    isTopicInputError: true,
    isNameInputLessError: true,
    isNameInputOverError: true
  };

  handleTopicInputError = e => {
    this.setState({
      isTopicInputError: e.target.value.length > 0
    });
  };

  handleNameInputError = e => {
    this.setState({
      isNameInputLessError: e.target.value.length > 0,
      isNameInputOverError: e.target.value.length < 26
    });
  };

  goToNext = () => {
    this.props.history.push("/makeclass/2");
  };
  render() {
    let topicNormal = "topic-input";
    let topicError = "topic-input-error";
    let nameNormal = "name-input";
    let nameError = "name-input-error";
    return (
      <div className="contents-wrapper">
        <div className="progress-bar">
          <div className="progress-bar-status"></div>
        </div>
        <div className="make-class-contents">
          <div className="contents-title-flex">
            <div className="contents-title-wrapper">
              <div className="contents-title">
                <div className="contents-title-text">01 클래스 기본정보</div>
                <div className="contents-title-sub">
                  <h3 className="contents-title-sub-text">클래스 정보</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="contents-body-flex">
            <div className="contents-body-left-wrapper">
              <div className="contents-body-left">
                <div className="class-category">
                  <label className="class-title">클래스 카테고리</label>
                  <select className="class-category-select">
                    <option value="true" hidden>
                      클래스 분야를 선택해 주세요.
                    </option>
                    <option value="공예">공예</option>
                    <option value="디자인, 개발">디자인, 개발</option>
                    <option value="디지털 드로잉">디지털 드로잉</option>
                    <option value="라이프 스타일">라이프 스타일</option>
                    <option value="미술">미술</option>
                    <option value="사진, 영상">사진, 영상</option>
                    <option value="시그니처">시그니처</option>
                    <option value="요리, 음료">요리, 음료</option>
                    <option value="음악">음악</option>
                    <option value="커리어">커리어</option>
                  </select>
                </div>
                <div className="class-level">
                  <label className="class-title">클래스 난이도</label>
                  <select className="class-level-select">
                    <option value="true" hidden>
                      클래스의 난이도를 선택해주세요.
                    </option>
                    <option value="초급">입문자</option>
                    <option value="초중급">초급자</option>
                    <option value="중급">중급자</option>
                    <option value="중상급">준전문가</option>
                    <option value="상급">전문가</option>
                  </select>
                </div>
                <div className="class-topic">
                  <label className="class-title">클래스 주제</label>
                  <div className="topic-sample-wrapper">
                    <div className="sample-title">
                      <span className="svg-flex">
                        <SVG
                          width="18"
                          height="18"
                          d="sampleCheck"
                          fill="#00b79d"
                        />
                      </span>
                      클래스 주제 작성법
                    </div>
                    <div className="sample-text">
                      "입문자분들을 위한 OOO 클래스입니다" 에 빈칸에 들어가는
                      문구 내 클래스를 표현하는 한 단어의 주제어를 적어주시면
                      됩니다.
                      <br />
                      <br />
                      예시 가죽공예, 어반스케치, 딥펜 캘리그라피, 다이어리
                      꾸미기, 알뜰한 가계부 작성, 색연필로 인물화 그리기
                    </div>
                  </div>
                  <div className="topic-input-wrapper">
                    <input
                      onChange={this.handleTopicInputError}
                      onBlur={this.handleTopicInputError}
                      className={
                        this.state.isTopicInputError ? topicNormal : topicError
                      }
                      type="text"
                      name="topicInput"
                      placeholder="내 클래스를 표현하는 한 단어의 주제어를 정해주세요."
                      autoComplete="off"
                    />
                    {!this.state.isTopicInputError && (
                      <h6 className="name-input-alert">
                        <SVG
                          width="16"
                          height="16"
                          d="alert"
                          fill="rgb(255, 82, 82)"
                        />
                        <span>필수 입력입니다.</span>
                      </h6>
                    )}
                  </div>
                </div>
                <div className="class-name">
                  <label className="class-title">클래스 제목</label>
                  <div className="name-input-wrapper">
                    <input
                      onChange={this.handleNameInputError}
                      onBlur={this.handleNameInputError}
                      className={
                        this.state.isNameInputLessError &&
                        this.state.isNameInputOverError
                          ? nameNormal
                          : nameError
                      }
                      type="text"
                      name="titleInput"
                      placeholder="클래스를 대표할 수 있는 제목을 정해주세요."
                      autoComplete="off"
                    />
                    {!this.state.isNameInputLessError && (
                      <h6 className="name-input-alert">
                        <SVG
                          width="16"
                          height="16"
                          d="alert"
                          fill="rgb(255, 82, 82)"
                        />
                        <span>필수 입력입니다.</span>
                      </h6>
                    )}
                    {!this.state.isNameInputOverError && (
                      <h6 className="name-input-alert">
                        <SVG
                          width="16"
                          height="16"
                          d="alert"
                          fill="rgb(255, 82, 82)"
                        />
                        <span>최대 25자 입니다.</span>
                      </h6>
                    )}
                  </div>
                </div>
                <div className="next-btn-wrapper">
                  <button
                    onClick={this.goToNext}
                    className="next-btn"
                    type="submit"
                    color="orange"
                    fill="false"
                  >
                    <span className="next-btn-text">다음</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="contents-body-right-wrapper">
              <div className="contents-body-right">
                <div className="class-info-wrapper">
                  <div className="class-info">
                    <div className="info-title">클래스 정보</div>
                    <div className="info-text">
                      자 우선, 내 클래스의 큰 틀을 잡아봅시다.
                      <br />
                      간단해요!
                      <br />
                      언제든 돌아와서 수정할 수 있으니까
                      <br />
                      일단 시작해볼까요?
                    </div>
                  </div>
                </div>
                <div className="class-guide">
                  <span className="guide-emoji" role="img" aria-label="perfect">
                    💯
                  </span>
                  <div className="guide-text">
                    클래스 주제와 제목에도 정답이 있고 오답이 있다?
                  </div>
                  <span className="a-flex">
                    <a className="guide-link" href="/makeclass/makeclass1">
                      <span className="guide-link-text">
                        정답이 궁금하다면 클릭!
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

export default withRouter(Step1);
