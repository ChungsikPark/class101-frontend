import React, { Component } from "react";
import "./MakeClass1.scss";
import HeaderWhite from "Components/HeaderWhite";
import NavStep1 from "Components/MakeClassNavs/NavStep1";

export class MakeClass1 extends Component {
  goToNext() {
    this.props.history.push("/makeclass/makeclass2");
  }
  render() {
    return (
      <div className="makeclass1">
        <HeaderWhite />
        <NavStep1 />
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

export default MakeClass1;
