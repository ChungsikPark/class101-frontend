import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Step6.scss";

export class Step6 extends Component {
  goToNext = () => {
    this.props.history.push("/makeclass/7");
  };
  render() {
    return (
      <div className="contents-wrapper">
        <div></div>
      </div>
    );
  }
}

export default withRouter(Step6);
