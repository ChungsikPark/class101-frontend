import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Step5.scss";

export class Step5 extends Component {
  goToNext = () => {
    this.props.history.push("/makeclass/6");
  };
  render() {
    return (
      <div className="contents-wrapper">
        <div></div>
      </div>
    );
  }
}

export default withRouter(Step5);
