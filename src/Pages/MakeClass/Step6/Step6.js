import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Step6.scss";
import MyEditor from "Components/MyEditor";
import axios from "axios";
import camera from "Img/camera-btn.png";
import photoAdd from "Img/photo-add.png";

export class Step6 extends Component {
  state = {};

  goToNext = () => {
    this.props.history.push("/makeclass/6");
  };
  render() {
    return (
      <div className="contents-wrapper6">
        <div className="makeclass-body">
          <div className="makeclass-topbar">
            <div className="makeclass-topbaryes"></div>
            <div className="makeclass-topbarno"></div>
          </div>
          <div className="makeclass-contents">
            <div className="makeclass-maincontents">
              <div className="maincontents-firsttitle">
                06. 크리에이터 소개하기
              </div>
              <div className="maincontents-subtitle">크리에이터 인터뷰</div>
              <div className="maincontents-recommendtitle">
                크리에이터 인터뷰
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

export default withRouter(Step6);
