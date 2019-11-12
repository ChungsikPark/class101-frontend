import React, { Component } from "react";
import "./InputArea.scss";

export class InputArea extends Component {
  state = {
    blankInput: true,
    blankH6: true
  };

  handleInput = e => {
    this.setState({
      blankInput: e.target.value.length > 0 ? true : false,
      blankH6: e.target.value.length > 0 ? true : false
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
            onChange={this.handleInput}
            onBlur={this.handleInput}
            className={this.state.blankInput ? rightInput : errorInput}
            type={this.props.inputType}
            name={this.props.inputName}
            placeholder={this.props.placeholder}
            autoComplete="off"
          ></input>
          <h6 className={this.state.blankH6 ? rightH6 : errorH6}>
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
