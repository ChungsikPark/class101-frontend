/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./MyClass.scss";
import Header from "Components/Header";
import Nav from "Components/Nav";
import MyclassClass from "Components/MyclassClass";
import utill from "Img/utill.png";
import MyClassMock from "./MyClassMock";

export class MyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Mock: MyClassMock
    };
  }
  goToIntro() {
    this.props.history.push("/intro/intro1");
  }
  render() {
    return (
      <div className="myclass-container">
        <Header />
        <Nav />
        <div className="myclass-body">
          <div className="myclass-header">내 온라인 클래스들</div>
          <div className="myclass-classes-section">
            {this.state.Mock.map((el, idx) => {
              return <MyclassClass info={el} index={idx} />;
            })}

            <div className="myclass-makeclass">
              <div
                onClick={this.goToIntro.bind(this)}
                className="myclass-makeclass-content"
              >
                <div className="myclass-makeclass-plus">+</div>
                <div className="myclass-makeclass-state">
                  새로운 클래스 생성하기
                </div>
              </div>
            </div>
          </div>
          <div className="myclass-help">
            <div className="myclass-help-header">도움말</div>
            <div className="myclass-helps-section">
              <div className="myclass-help">
                <div className="myclass-help-title">
                  크리에이터가 되는 방법<div>></div>
                </div>
                <div className="myclass-help-content">
                  위코드101이 처음이신가요? 위코드101의 크리에이터가 되는 방법을
                  알려드립니다
                </div>
              </div>
              <div className="myclass-help">
                <div className="myclass-help-title">
                  클래스 제작은 어떻게 진행되나요?<div>></div>
                </div>
                <div className="myclass-help-content">
                  제작 순서와 크리에이터님이 위코드101에게 어떤 지원을 받을 수
                  있을지 알려드립니다. 클래스 제작 이 막막할 때 둘러보아도
                  좋아요.
                </div>
              </div>
              <div className="myclass-help">
                <div className="myclass-help-title">
                  주문 및 배송관리는 어떻게 하나요?<div>></div>
                </div>
                <div className="myclass-help-content">
                  주문 / 배송 / 환불을 어떻게 관리하는지 알려드립니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyClass;
