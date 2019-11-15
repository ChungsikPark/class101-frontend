import React, { Component } from "react";
import "./MakeClass2.scss";
import HeaderWhite from "Components/HeaderWhite";
import NavStep2 from "Components/MakeClassNavs/NavStep2";

export class MakeClass2 extends Component {
  goToNext() {
    this.props.history.push("/makeclass/makeclass3");
  }
  render() {
    return (
      <div className="makeclass2">
        <HeaderWhite />
        <NavStep2 />

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

export default MakeClass2;
