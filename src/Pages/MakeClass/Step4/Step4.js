import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SVG from "Img/SVG";
import info1 from "Img/makeclass-info1.png";
import InputArea from "Components/MyEditor";
import "./Step4.scss";

export class Step4 extends Component {
  state = {
    reco1: "",
    reco2: "",
    topic1: "",
    topic2: "",
    topic3: ""
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  goToNext = () => {
    this.props.history.push("/makeclass/5");
  };
  render() {
    return (
      <div className="contents-wrapper4">
        <div className="makeclass-body">
          <div className="makeclass-topbar">
            <div className="makeclass-topbaryes"></div>
            <div className="makeclass-topbarno"></div>
          </div>
          <div className="makeclass-contents">
            <div className="makeclass-maincontents">
              <div className="maincontents-firsttitle">02. 클래스 소개하기</div>
              <div className="maincontents-subtitle">클래스 부가정보</div>
              <div className="maincontents-recommendtitle">
                이런분들이 들으면 좋아요
              </div>
              <div className="maincontents-helpbox">
                <div className="helpbox-title">
                  <SVG fill="#05ad81" width="18" height="18" d="check"></SVG>
                  &nbsp; 클래스 추천대상 작성법
                </div>
                <div className="helpbox-contents">
                  클래스를 어떤 분들에게 추천하고 싶은지 4가지 정도
                  나열해주세요. 첫 2가지는 대부분의 사람에게 적용될만한 범용적인
                  대상을 추천하고, 나머지 2가지는 구체적인 대상을 추천하는 것이
                  좋습니다.
                  <br />
                  <br /> 예시) 페이퍼플라워 클래스 손을 꼬물대며 무언가 만드는
                  것을 좋아하는 분, 꽃을 좋아하지만, 알러지가 있거나 식물을 잘
                  관리하며 키우기가 힘겨우신 분 페이퍼플라워를 보고 예쁘다고
                  생각을 하셨던 분, 다양한 소품을 활용하여 촬영하는 일이 많은
                  블로거
                </div>
              </div>
              <InputArea
                inputTitle="추천 대상 01"
                placeholder="클래스 추천대상을 입력해주세요"
                inputType="text"
                alertMessage="패스워드를 입력해주세요."
                inputValue={this.state.reco1}
                handleInput={this.handleInput}
                name="reco1"
              />
              <InputArea
                inputTitle="추천 대상 02"
                placeholder="클래스 추천대상을 입력해주세요"
                inputType="text"
                alertMessage="패스워드를 입력해주세요."
                inputValue={this.state.reco2}
                handleInput={this.handleInput}
                name="reco2"
              />
              <div className="maincontents-fake">
                <div className="object-inputholder">
                  <span>+ 추천대상 추가하기</span>
                </div>
              </div>
              <div className="maincontents-recommendtitle">
                위코드에게 주제 투표 받아보세요
              </div>
              <div className="maincontents-helpbox">
                <div className="helpbox-title">
                  <SVG fill="#05ad81" width="18" height="18" d="check"></SVG>
                  &nbsp; 클래스 주제 작성법
                </div>
                <div className="helpbox-contents">
                  진행 가능한 클래스 주제 후보들을 제시해주세요. 제시해 주신
                  3~6개 정도의 주제를 활용하여 수요를 확인해봅니다. 그래서
                  기대감을 줄 수 있도록 구체적인 주제들이 좋습니다.
                  <br />
                  <img className="helpbox-info1" src={info1} />
                </div>
              </div>
              <InputArea
                inputTitle="주제 후보 01"
                placeholder="클래스 주제를 입력해주세요"
                inputType="text"
                handleInput={this.handleInput}
                alertMessage="패스워드를 입력해주세요."
                name="topic1"
                inputValue={this.state.topic1}
              />
              <InputArea
                inputTitle="주제 후보 02"
                placeholder="클래스 주제를 입력해주세요"
                inputType="text"
                handleInput={this.handleInput}
                alertMessage="패스워드를 입력해주세요."
                name="topic2"
                inputValue={this.state.topic2}
              />
              <InputArea
                inputTitle="주제 후보 03"
                placeholder="클래스 주제를 입력해주세요"
                inputType="text"
                handleInput={this.handleInput}
                alertMessage="패스워드를 입력해주세요."
                name="topic3"
                inputValue={this.state.topic3}
              />
              <div className="maincontents-fake">
                <div className="object-inputholder">
                  <span>+ 주제 추가하기</span>
                </div>
              </div>
              <div className="makeclass-buttons">
                <button className="buttons-back">
                  <span>이전</span>
                </button>
                <button className="buttons-next">
                  <span>다음</span>
                </button>
              </div>
            </div>
            <div className="makeclass-subcontents">
              <div className="subcontents-ballon">
                <div className="ballon-title">클래스 부가정보</div>
                <div className="ballon-content">
                  와아- 제일 큰 산을 넘기셨네요! <br />
                  수고하셨어요 : ) <br />
                  <br />
                  이번엔 수강생분들과 교감하게 될 부분이에요.
                  <br /> 어떤 분들이 들으면 좋을지 추천하고 클래스 주제 투표를
                  받아봅시다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Step4);
