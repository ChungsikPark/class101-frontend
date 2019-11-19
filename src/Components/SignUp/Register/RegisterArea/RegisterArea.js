import React, { Component } from "react";
import SVG from "Img/SVG.js";
import "./RegisterArea.scss";

export class RegisterArea extends Component {
  state = {
    blankRgAlert: true
  };
  handleRgAlert = e => {
    this.setState({
      blankRgAlert: e.target.value.length > 0
    });
  };

  render() {
    let rightInput = "rg-input";
    let errorInput = "rg-input-error";
    let rightAlert = "rg-alert";
    let errorAlert = "rg-alert-error";
    return (
      <div className="register-blank">
        <label className="rg-label">{this.props.labelText}</label>
        <div className="rg-input-wrapper">
          <input
            onInput={this.props.handleInput}
            onChange={this.handleRgAlert}
            onBlur={this.handleRgAlert}
            className={this.state.blankRgAlert ? rightInput : errorInput}
            type={this.props.inputType}
            name={this.props.inputName}
            placeholder={this.props.placeholder}
            autoComplete="off"
          ></input>
          <h6 className={this.state.blankRgAlert ? rightAlert : errorAlert}>
            <SVG width="16" height="16" d="alert" />
            <span className="rg-alert-message">{this.props.alertMessage}</span>
          </h6>
        </div>
      </div>
    );
  }
}

export default RegisterArea;
