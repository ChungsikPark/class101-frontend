import React, { Component } from "react";
import "./MakeClass3.scss";
import HeaderWhite from "Components/HeaderWhite";
import NavStep3 from "Components/MakeClassNavs/NavStep3";

export class MakeClass3 extends Component {
  goToNext() {
    this.props.history.push("/makeclass/makeclass4");
  }
  render() {
    return (
      <div className="makeclass3">
        <HeaderWhite />
        <NavStep3 />
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

export default MakeClass3;
