import React, { Component } from "react";
import "./MakeClass6.scss";
import HeaderWhite from "Components/HeaderWhite";
import NavStep6 from "Components/MakeClassNavs/NavStep6";

export class MakeClass6 extends Component {
  goToNext() {
    this.props.history.push("/makeclass/makeclass1");
  }
  render() {
    return (
      <div className="makeclass6">
        <HeaderWhite />
        <NavStep6 />
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

export default MakeClass6;
