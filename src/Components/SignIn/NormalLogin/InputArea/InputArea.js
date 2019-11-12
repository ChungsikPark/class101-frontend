import React, { Component } from "react";
import "./InputArea.scss";

export class InputArea extends Component {
  state = {
    blankFirstInput: true,
    blankFirstH6: true,
    blankSecondInput: true,
    blankSecondH6: true
  };

  handleFirstInput = e => {
    this.setState({
      blankFirstInput: e.target.value.length > 0 ? true : false,
      blankFirstH6: e.target.value.length > 0 ? true : false
    });
  };

  handleSecondInput = e => {
    this.setState({
      blankSecondInput: e.target.value.length > 0 ? true : false,
      blankSecondH6: e.target.value.length > 0 ? true : false
    });
  };

  render() {
    let rightInput = "input-box";
    let errorInput = "input-box-error";
    let rightH6 = "h6";
    let errorH6 = "h6-error";
    return (
      <div className="input-area">
        <label className="input-label">{this.props.labelText}</label>
        <div className="input-content">
          <input
            onChange={this.handleFirstInput}
            onBlur={this.handleFirstInput}
            className={this.state.blankFirstInput ? rightInput : errorInput}
            type={this.props.inputType}
            name={this.props.inputName}
            placeholder={this.props.placeholder}
            autoComplete="off"
          ></input>
          <h6 className={this.state.blankFirstH6 ? rightH6 : errorH6}>
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                fill="#3E4042"
                fillRule="evenodd"
                d="M21.872 19.51A1 1 0 0121 21H3a1 1 0 01-.872-1.49l9-16a1 1 0 011.744 0l9 16zM13 15V9h-2v6h2zm0 3v-2h-2v2h2z"
              />
            </svg>
            <span className="alert-message">{this.props.alertMessage}</span>
          </h6>
        </div>
      </div>
    );
  }
}

export default InputArea;
