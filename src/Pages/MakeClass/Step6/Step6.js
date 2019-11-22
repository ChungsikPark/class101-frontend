import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Step6.scss";
import Interview from "Components/Interview";

export class Step6 extends Component {
  state = {
    SelectName1: "",
    TextName1: "",
    SelectName2: "",
    TextName2: "",
    SelectName3: "",
    TextName3: "",
    selectedFile1: null,
    previewUrl1: null,
    selectedFile2: null,
    previewUrl2: null,
    selectedFile3: null,
    previewUrl3: null
  };

  handleFileInput = e => {
    e.preventDefault();
    let previewFile = new FileReader();
    let selectedFile = e.target.files[0];

    previewFile.onloadend = () => {
      this.setState({
        selectedFile1: selectedFile,
        previewUrl1: previewFile.result
      });
    };

    previewFile.readAsDataURL(selectedFile);
  };

  handleFileInput2 = e => {
    e.preventDefault();
    let previewFile = new FileReader();
    let selectedFile = e.target.files[0];

    previewFile.onloadend = () => {
      this.setState({
        selectedFile2: selectedFile,
        previewUrl2: previewFile.result
      });
    };

    previewFile.readAsDataURL(selectedFile);
  };

  handleFileInput3 = e => {
    e.preventDefault();
    let previewFile = new FileReader();
    let selectedFile = e.target.files[0];

    previewFile.onloadend = () => {
      this.setState({
        selectedFile3: selectedFile,
        previewUrl3: previewFile.result
      });
    };

    previewFile.readAsDataURL(selectedFile);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  goToNext = () => {
    fetch("http://10.58.0.33:8000/account/signup", {
      method: "post",
      body: JSON.stringify({
        SelectName1: this.state.SelectName1,
        TextName1: this.state.TextName1,
        SelectName2: this.state.SelectName2,
        TextName2: this.state.TextName2,
        selectedFile1: this.state.selectedFile1,
        previewUrl1: this.state.previewUrl1,
        selectedFile2: this.state.selectedFile2,
        previewUrl2: this.state.previewUrl2
      })
    })
      .then(function(res) {
        return res.json();
      })
      .then(res => {
        this.props.history.push("/myclass");
      });
  };
  render() {
    const { SelectName1, TextName1, SelectName2, TextName2 } = this.state;
    // console.log(this.state);
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
              <div className="maincontents-aboutinterview">
                클래스메이트들이 궁금해 할 만한 이야기나, 크리에이터님이
                어필하고 싶은 이야기를 요약하여 매거진 형태로 보여주는
                공간입니다. 다 담지 못한 이야기를 질문과 답변으로 풀어주세요.
              </div>
              <Interview
                name="selectedFile1"
                id="previewUrl1"
                askIndex="01"
                SelectName="SelectName1"
                TextName="TextName1"
                handleChange={this.handleChange}
                handleFileInput={this.handleFileInput}
                previewUrl={this.state.previewUrl1}
                TextValue={this.state.TextName1}
              />
              <Interview
                name="selectedFile2"
                id="previewUrl2"
                askIndex="02"
                SelectName="SelectName2"
                TextName="TextName2"
                handleChange={this.handleChange}
                handleFileInput={this.handleFileInput2}
                previewUrl={this.state.previewUrl2}
                TextValue={this.state.TextName2}
              />
              <Interview
                name="selectedFile3"
                id="previewUrl3"
                askIndex="03"
                SelectName="SelectName3"
                TextName="TextName3"
                handleChange={this.handleChange}
                handleFileInput={this.handleFileInput3}
                previewUrl={this.state.previewUrl3}
                TextValue={this.state.TextName3}
              />

              <div className="makeclass-buttons">
                <button className="buttons-back">
                  <span>이전</span>
                </button>
                <button
                  className={
                    SelectName1 && TextName1 && SelectName2 && TextName2 !== ""
                      ? "buttons-next"
                      : "buttons-next-false"
                  }
                >
                  <span>다음</span>
                </button>
              </div>
            </div>
            <div className="makeclass-subcontents">
              <div className="subcontents-ballon">
                <div className="ballon-title">크리에이터 인터뷰</div>

                <div className="ballon-content">
                  짝짝짝-! 마지막입니다.
                  <br /> 내가 매거진 인터뷰를 한다고 생각해보세요.
                  <br /> 클래스 소개나 크리에이터 소개에 녹이지 못한 이야기들을
                  여기서 해보는 거예요.
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
