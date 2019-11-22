import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SVG from "Img/SVG.js";
import PhotoAdd from "Img/photo-add.png";
import axios from "axios";
import "./Step2.scss";

export class Step2 extends Component {
  state = {
    selectedFile: null,
    previewUrl: null
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

  goToNext = () => {
    this.props.history.push("/makeclass/3");
  };

  render() {
    console.log(this.state);
    return (
      <div className="contents-wrapper2">
        <div className="progress-bar">
          <div className="progress-bar-status"></div>
        </div>
        <div className="make-class-contents">
          <div className="contents-title-flex">
            <div className="contents-title-wrapper">
              <div className="contents-title">
                <div className="contents-title-text">01 클래스 기본정보</div>
                <div className="contents-title-sub">
                  <h3 className="contents-title-sub-text">커버 이미지</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="contents-body-flex">
            <div className="contents-body-left-wrapper">
              <div className="contents-body-left">
                <div className="cover-image-info">커버이미지</div>
                <div className="cover-image-info-text">
                  커버로 사용할 이미지를 추가해주세요. 커버이미지는 언제든지
                  수정 가능합니다.
                </div>
                <div className="cover-image-alert-box">
                  <div className="cover-image-alert-title">
                    <span className="cover-image-alert-title-in">
                      <SVG width="18" height="18" d="exclamation" />
                    </span>
                    수강생들의 반응을 보고 클래스101이 커버를 바꿀 수도 있어요!
                  </div>
                  <div className="cover-image-alert-text">
                    수강생들의 반응을 보고 수강생들에게 더 반응이 좋은 이미지로
                    클래스101이 임의로 커버이미지를 수정할 수도 있습니다.
                  </div>
                </div>
                {/* sadsadsadsadasdsadsadsadasdsaddasdasdsadsadsadasdsadsadsadasd
asdasdasdasdasdsadsadsadasdsaddasdasdsadsadsadasdsadsadsadasd
asdasdasdasdasdsadsadsadasdsaddasdasdsadsadsadasdsadsadsadasd
asdasdasdas */}
                {!this.state.previewUrl && (
                  <label className="cover-image-photo-field-wrapper">
                    <input
                      type="file"
                      accept="image/*"
                      name="file"
                      onChange={e => this.handleFileInput(e)}
                    ></input>
                    <div className="cover-image-photo-field">
                      <div className="cover-image-photp-field-in">
                        <img
                          className="photo-field-img"
                          src={PhotoAdd}
                          alt=""
                        ></img>
                        <h2 className="photo-field-text">사진 추가하기</h2>
                        <p className="photo-field-sub">
                          파일 형식 : jpg 또는 png
                          <br />
                          추천 사이즈 : 가로 1600px, 세로 1200px 이상 (4:3 비율)
                        </p>
                      </div>
                    </div>
                  </label>
                )}
                {/* sadsadsadsadasdsadsadsadasdsaddasdasdsadsadsadasdsadsadsadasd
asdasdasdasdasdsadsadsadasdsaddasdasdsadsadsadasdsadsadsadasd
asdasdasdasdasdsadsadsadasdsaddasdasdsadsadsadasdsadsadsadasd
asdasdasdas */}
                {this.state.previewUrl && (
                  <div className="contain-photo-field">
                    <span className="contain-photo">
                      <img src={this.state.previewUrl} alt=""></img>
                    </span>
                    <button
                      className="contain-photo-delete"
                      type="submit"
                      onClick={this.handlePreview}
                    >
                      <SVG width="24" height="24" d="xMark" />
                    </button>
                  </div>
                )}
                {/* sadsadsadsadasdsadsadsadasdsaddasdasdsadsadsadasdsadsadsadasd
asdasdasdasdasdsadsadsadasdsaddasdasdsadsadsadasdsadsadsadasd
asdasdasdasdasdsadsadsadasdsaddasdasdsadsadsadasdsadsadsadasd
asdasdasdas */}
                <div className="cover-image-btn-box">
                  <button className="cover-image-pre-btn" type="submit">
                    <span className="cover-image-pre-btn-text">이전</span>
                  </button>
                  <button
                    className="cover-image-next-btn"
                    type="submit"
                    onClick={this.goToNext && this.handlePost}
                  >
                    <span className="cover-image-next-btn-text">다음</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="contents-body-right-wrapper">
              <div className="contents-body-right-cover-img">
                <div className="cover-img-guide-wrapper">
                  <div className="cover-img-guide">
                    <div className="cover-img-guide-title">커버이미지</div>
                    <div className="cover-img-guide-text">
                      많은 클래스들 사이에서 돋보일 수 있게, 클래스를 잘
                      나타내는 이미지를 골라주세요.
                    </div>
                  </div>
                </div>
                <div className="cover-img-link-wrapper">
                  <span className="cover-img-emoji" role="img" aria-label="dog">
                    🐕
                  </span>
                  <div className="cover-img-link-title">
                    본능적으로 끌리는 이미지가 있다는 거 아시나요?
                  </div>
                  <span className="cover-img-a-flex">
                    <a className="cover-img-link" href="/makeclass/2">
                      <span className="cover-img-link-text">
                        클릭율 좋은 이미지가 궁금하다면 클릭!
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

export default withRouter(Step2);
