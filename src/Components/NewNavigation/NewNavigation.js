import React, { Component } from "react";
import SVG from "Img/SVG.js";
import "./NewNavigation.scss";

export class NewNavigation extends Component {
  state = {
    isFirstOneSelected: false,
    isFirstTwoSelected: true,
    isSecondOneSelected: false,
    isSecondTwoSelected: false,
    isThirdOneSelected: false,
    isThirdTwoSelected: false,
    isFirstOneDone: true,
    isFirstTwoDone: false,
    isSecondOneDone: false,
    isSecondTwoDone: false,
    isThirdOneDone: true,
    isThirdTwoDone: false
  };
  render() {
    return (
      <div className="navigation-wrapper">
        <div className="navigation">
          <div className="navigation-title">
            <div className="navigation-title-text">01 클래스 기본정보</div>
            {this.state.isFirstOneDone && this.state.isFirstTwoDone && (
              <SVG width="20" height="20" d="check" fill="rgb(62, 64, 66)" />
            )}
          </div>
          <div
            className={
              this.state.isFirstOneSelected
                ? "navigation-text-wrap-done"
                : "navigation-text-wrap"
            }
          >
            <div className="navigation-text">클래스 정보</div>
            {this.state.isFirstOneDone && (
              <SVG width="20" height="20" d="check" fill="rgb(62, 64, 66)" />
            )}
          </div>
          <div
            className={
              this.state.isFirstTwoSelected
                ? "navigation-text-wrap-done"
                : "navigation-text-wrap"
            }
          >
            <div className="navigation-text">커버 이미지</div>
            {this.state.isFirstTwoDone && (
              <SVG width="20" height="20" d="check" fill="rgb(62, 64, 66)" />
            )}
          </div>
        </div>
        <div className="navigation">
          <div className="navigation-title">
            <div className="navigation-title-text">02 클래스 소개하기</div>
            {this.state.isSecondOneDone && this.state.isSecondTwoDone && (
              <SVG width="20" height="20" d="check" fill="rgb(62, 64, 66)" />
            )}
          </div>
          <div
            className={
              this.state.isSecondOneSelected
                ? "navigation-text-wrap-done"
                : "navigation-text-wrap"
            }
          >
            <div className="navigation-text">클래스 소개</div>
            {this.state.isSecondOneDone && (
              <SVG width="20" height="20" d="check" fill="rgb(62, 64, 66)" />
            )}
          </div>
          <div
            className={
              this.state.isSecondTwoSelected
                ? "navigation-text-wrap-done"
                : "navigation-text-wrap"
            }
          >
            <div className="navigation-text">클래스 부가정보</div>
            {this.state.isSecondTwoDone && (
              <SVG width="20" height="20" d="check" fill="rgb(62, 64, 66)" />
            )}
          </div>
        </div>
        <div className="navigation">
          <div className="navigation-title">
            <div className="navigation-title-text">03 크리에이터 소개하기</div>
            {this.state.isThirdOneDone && this.state.isThirdTwoDone && (
              <SVG width="20" height="20" d="check" fill="rgb(62, 64, 66)" />
            )}
          </div>
          <div
            className={
              this.state.isThirdOneSelected
                ? "navigation-text-wrap-done"
                : "navigation-text-wrap"
            }
          >
            <div className="navigation-text">크리에이터 정보</div>
            {this.state.isThirdOneDone && (
              <SVG width="20" height="20" d="check" fill="rgb(62, 64, 66)" />
            )}
          </div>
          <div
            className={
              this.state.isThirdTwoSelected
                ? "navigation-text-wrap-done"
                : "navigation-text-wrap"
            }
          >
            <div className="navigation-text">크리에이터 인터뷰</div>
            {this.state.isThirdTwoDone && (
              <SVG width="20" height="20" d="check" fill="rgb(62, 64, 66)" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NewNavigation;
