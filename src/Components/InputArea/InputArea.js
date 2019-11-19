import React, { Component } from "react";
import "./InputArea.scss";
import SVG from "Img/SVG";

export class InputArea extends Component {
  state = { alert: true };
  handleInput = e => {
    this.setState({ alert: e.target.value.length > 0 });
  };

  render() {
    const { alert } = this.state;

    return (
      <div className="maincontents-object">
        <div className="object-title">{this.props.inputTitle}</div>
        <div className={`object-inputholder${alert ? "" : "-red"}`}>
          <input
            onInput={this.props.handleInput}
            onChange={this.handleInput}
            placeholder={this.props.placeholder}
            type={this.props.inputType}
            value={this.props.inputValue}
            className={"object-input"}
            name={this.props.name}
          />
        </div>
        <div className={`object-alert${alert ? "" : "-red"}`}>
          <SVG fill="red" width="15" height="15" d="alert"></SVG>
          <span>필수입력입니다.</span>
        </div>
      </div>
    );
  }
}

export default InputArea;

//"object-inputholder"  {`object-inputholder${alert ? "" : "-red"}`
//"buttons-next"
