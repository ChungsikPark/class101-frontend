import React, { Component } from "react";
import "./MakeClass4.scss";
import HeaderWhite from "Components/HeaderWhite";
import NavStep4 from "Components/MakeClassNavs/NavStep4";

export class MakeClass4 extends Component {
  goToNext() {
    this.props.history.push("/makeclass/makeclass5");
  }
  render() {
    return (
      <div className="makeclass4">
        <HeaderWhite />
        <NavStep4 />
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

export default MakeClass4;
