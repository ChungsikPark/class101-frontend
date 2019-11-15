import React, { Component } from "react";
import Checksvg from "Img/makeclasssvg";
import "./NavStep5.scss";

export class NavStep5 extends Component {
  render() {
    return (
      <div className="myclass-nav5">
        <div className="nav2-border"></div>
        <div className="nav-contents">
          <div className="nav-title-done">
            01 클래스 기본정보
            <Checksvg />
          </div>
          <div className="nav-content-done">
            클래스 정보
            <Checksvg />
          </div>
          <div className="nav-content-done">
            커버이미지
            <Checksvg />
          </div>
          <div className="nav-title-done">
            02 클래스 소개하기
            <Checksvg />
          </div>
          <div className="nav-content-done">
            클래스 소개
            <Checksvg />
          </div>
          <div className="nav-content-done">
            클래스 부가정보
            <Checksvg />
          </div>
          <div className="nav-title">03 크리에이터 소개하기</div>
          <div className="nav-content-doing">크리에이터 정보</div>
          <div className="nav-content">크리에이터 인터뷰</div>
        </div>
      </div>
    );
  }
}

export default NavStep5;
