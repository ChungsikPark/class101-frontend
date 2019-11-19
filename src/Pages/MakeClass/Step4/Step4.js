import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Step4.scss";

export class Step4 extends Component {
  goToNext = () => {
    this.props.history.push("/makeclass/5");
  };
  render() {
    return (
      <div className="contents-wrapper">
        <div></div>
      </div>
    );
  }
}

export default withRouter(Step4);
