import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Step2.scss";

export class Step2 extends Component {
  goToNext = () => {
    this.props.history.push("/makeclass/3");
  };
  render() {
    return (
      <div className="contents-wrapper">
        <div></div>
      </div>
    );
  }
}

export default withRouter(Step2);
