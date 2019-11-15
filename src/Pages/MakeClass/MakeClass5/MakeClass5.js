import React, { Component } from "react";
import "./MakeClass5.scss";
import HeaderWhite from "Components/HeaderWhite";
import NavStep5 from "Components/MakeClassNavs/NavStep5";

export class MakeClass5 extends Component {
  goToNext() {
    this.props.history.push("/makeclass/makeclass6");
  }
  render() {
    return (
      <div className="makeclass5">
        <HeaderWhite />
        <NavStep5 />
        <div className="makeclass-body">
          <div className="makeclass-topbar">
            <div className="makeclass-topbaryes"></div>
            <div className="makeclass-topbarno"></div>
          </div>
          <div className="makeclass-contents">
            <button onClick={this.goToNext.bind(this)} className="button" />
          </div>
        </div>
      </div>
    );
  }
}

export default MakeClass5;
