import React, { Component } from "react";
import utill from "../../Img/utill.png";
import "./MyclassClass.scss";

export class MyclassClass extends Component {
  render() {
    let { info } = this.props;

    // let Classimg = src => ({
    //   backgroundImage: `url(${src})``url(info.classimg)`
    // });

    console.log(info.classimg);
    return (
      <div className="myclass-class">
        <div
          style={{ backgroundImage: `url(${info.classimg})` }}
          className="myclass-img"
        />
        <div className="myclass-contents">
          <div className="myclass-title">{info.classname}</div>
          <img src={utill} className="myclass-utill" alt="" />
        </div>
        <div className="myclass-status">클래스 진행중</div>
      </div>
    );
  }
}

export default MyclassClass;
