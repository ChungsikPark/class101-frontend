import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Step5.scss";
import MyEditor from "Components/MyEditor";
import axios from "axios";
import camera from "Img/camera-btn.png";
import photoAdd from "Img/photo-add.png";

export class Step5 extends Component {
  state = {
    selectedFile: null,
    previewUrl: null,
    creatorName: "",
    contact: "",
    aboutme: ""
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handlePreview = () => {
    this.setState({ selectedFile: null, previewUrl: null });
  };
  handleFileInput = e => {
    e.preventDefault();
    let previewFile = new FileReader();
    let selectedFile = e.target.files[0];

    previewFile.onloadend = () => {
      this.setState({
        selectedFile: selectedFile,
        previewUrl: previewFile.result
      });
      console.log("sad");
    };

    previewFile.readAsDataURL(selectedFile);
  };
  handlePost = () => {
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);

    return axios
      .post("http://localhost3000", formData)
      .then(res => {
        alert("성공");
      })
      .catch(err => {
        alert("실패");
      });
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  goToNext = () => {
    this.props.history.push("/makeclass/6");
  };
  render() {
    console.log(this.state.creatorName, this.state.contact);
    return (
      <div className="contents-wrapper5">
        <div className="makeclass-body">
          <div className="makeclass-topbar">
            <div className="makeclass-topbaryes"></div>
            <div className="makeclass-topbarno"></div>
          </div>
          <div className="makeclass-contents">
            <div className="makeclass-maincontents">
              <div className="maincontents-firsttitle">
                03. 크리에이터 소개하기
              </div>
              <div className="maincontents-subtitle">크리에이터 정보</div>
              <div className="maincontents-recommendtitle">프로필사진</div>
              {!this.state.previewUrl && (
                <div
                  style={{ backgroundImage: `url(${photoAdd})` }}
                  className="picinput-container"
                >
                  <input
                    type="file"
                    accept="image/*"
                    name="file"
                    onChange={e => this.handleFileInput(e)}
                    className="maincontents-pic"
                  />
                </div>
              )}
              {this.state.previewUrl && (
                <div className="img-real-container">
                  <img
                    src={this.state.previewUrl}
                    alt="myimg"
                    className="img-real"
                  ></img>
                </div>
              )}

              <div className="maincontents-input-name">
                <div className="object-title">크리에이터 닉네임</div>
                <div className={`object-inputholder${alert ? "" : "-red"}`}>
                  <input
                    placeholder="사용하실 닉네임을 적어주세요"
                    type="text"
                    className="object-input"
                    // name={this.props.name}
                    onChange={this.handleInput}
                    name="creatorName"
                  />
                </div>
                <div className="object-counter">
                  <span>{this.state.creatorName.length}자 / 최대 15자</span>
                </div>
              </div>
              <div className="maincontents-input-name">
                <div className="object-title">연락처</div>
                <div className={`object-inputholder${alert ? "" : "-red"}`}>
                  <input
                    placeholder="연락처를 적어주세요"
                    type="text"
                    className="object-input"
                    onChange={this.handleInput}
                    name="contact"
                    // name={this.props.name}
                  />
                </div>
              </div>
              <div className="makeclass-channel">
                <div className="channel-title">채널 계정</div>
                <div className="mola">
                  유튜브, 인스타그램, 페이스북 등의 주소를 입력해주세요.
                  유튜브와 인스타그램 주소는 크리에이터 소개 아래에 버튼으로
                  링크가 추가됩니다.
                </div>
                {/* <div className="channel-add">몰라</div> */}
                <button className="channel-button">+ 채널추가하기</button>
              </div>
              <div className="makeclass-aboutme">
                <div className="aboutme-title">크리에이터 소개</div>
              </div>
              <MyEditor />
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

export default withRouter(Step5);
