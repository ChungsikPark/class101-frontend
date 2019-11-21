import React, { Component } from "react";
import "./Interview.scss";
import photoAdd from "Img/photo-add.png";

export class Interview extends Component {
  //   handlePreview = () => {
  //     this.setState({ selectedFile: null, previewUrl: null });
  //   };
  //   handleFileInput = e => {
  //     e.preventDefault();
  //     let previewFile = new FileReader();
  //     let selectedFile = e.target.files[0];

  //     previewFile.onloadend = () => {
  //       this.setState({
  //         selectedFile: selectedFile,
  //         previewUrl: previewFile.result
  //       });
  //       console.log("sad");
  //     };

  //     previewFile.readAsDataURL(selectedFile);
  //   };

  render() {
    console.log(this.props);
    return (
      <div className="interviewbody">
        <div className="interview-index">질문 {this.props.askIndex}</div>
        <div className="class-category">
          <select
            onChange={this.props.handleChange}
            className="class-category-select"
            required
            name={this.props.SelectName}
          >
            <option disabled selected hidden value="">
              질문을 선택해주세요
            </option>
            <option value="definition">
              크리에이터님에 대해 한 마디로 소개 부탁드려요!
            </option>
            <option value="recommendedFor">
              이 클래스를 특별히 추천하고 싶은 분들이 있나요?
            </option>
            <option value="advantage">
              자랑하고 싶은 이 클래스만의 장점을 말해주세요!
            </option>
            <option value="usage">
              이 클래스를 듣고나면 어떻게 활용할 수 있나요?
            </option>
            <option value="charm">이 클래스만의 매력을 어필해주세요!</option>
            <option value="effect">
              클래스 메이트분들이 어떨 때 보람을 느낄 것 같나요?
            </option>
            <option value="offline">
              오프라인 클래스를 진행 경험이 있으신가요?
            </option>
            <option value="nickname">
              크리에이터님의 이름에는 어떤 뜻이 담겨있나요?
            </option>
            <option value="episode">좌우명 같은 것이 있으신가요?</option>
            <option value="instrument">왜 이 작업을 시작하게 되셨나요?</option>
            <option value="process">
              크리에이터님의 작업 과정을 간략하게 말해주세요!
            </option>
            <option value="happyWork">
              작업하면서 언제 가장 즐거우신가요?
            </option>
            <option value="hardWork">
              여태껏 가장 힘들었던 작업은 어떤 작업이었나요?
            </option>
            <option value="experience">
              작업을 하다 생긴 특별한 추억이 있으신가요?
            </option>
            <option value="dream">앞으로는 어떤 꿈이 있으신가요?</option>
          </select>
        </div>
        <div className="interview-ask">답변</div>
        <div className="interview-flexcontainer">
          <textarea
            onChange={this.props.handleChange}
            placeholder="질문에 답변을 작성해주세요"
            type="text"
            className="interview-input"
            name={this.props.TextName}
          ></textarea>
          <div className="interview-preview">
            {!this.props.previewUrl && (
              <div className="preview-container">
                <div
                  style={{ backgroundImage: `url(${photoAdd})` }}
                  className="picinput-container"
                >
                  <input
                    type="file"
                    accept="image/*"
                    name={this.props.name}
                    onChange={e => this.props.handleFileInput(e)}
                    className="maincontents-pic"
                  />
                </div>
                <span className="mola">사진추가하기</span>
                <span className="molaa">
                  파일형식 : jpg또는 png
                  <br />
                  추천 사이즈 : 세로형
                  <br />
                  (3:4비율)
                </span>
              </div>
            )}
            {this.props.previewUrl && (
              <div className="img-container">
                <img
                  src={this.props.previewUrl}
                  alt="myimg"
                  className="img-real"
                ></img>
              </div>
            )}
          </div>
        </div>
        <span className="text-length">
          {this.props.TextValue.length}자 / 최대 250자
        </span>
      </div>
    );
  }
}

export default Interview;
