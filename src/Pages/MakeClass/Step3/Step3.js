import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Step3.scss";

export class Step3 extends Component {
  goToNext = () => {
    this.props.history.push("/makeclass/4");
  };
  render() {
    return (
      <div className="contents-wrapper">
        <div></div>
      </div>
    );
  }
}

export default withRouter(Step3);
