import React, { Component } from "react";
import HeaderWhite from "Components/HeaderWhite";
import NewNavigation from "Components/NewNavigation";
import Step1 from "Pages/MakeClass/Step1";

import Step2 from "Pages/MakeClass/Step2";
import Step3 from "Pages/MakeClass/Step3";
import Step4 from "Pages/MakeClass/Step4";
import Step5 from "Pages/MakeClass/Step5";
import Step6 from "Pages/MakeClass/Step6";
import "./MakeClass.scss";

export class MakeClass extends Component {
  state = {
    currentPage: 5
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  han;

  handlePreStep = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  handleNextStep = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  render() {
    let currentPage = "";
    switch (this.state.currentPage) {
      case 1:
        currentPage = <Step1 changeNextStep={this.handleNextStep} />;
        break;
      case 2:
        currentPage = (
          <Step2
            changePreStep={this.handlePreStep}
            changeNextStep={this.handleNextStep}
          />
        );
        break;
      case 3:
        currentPage = (
          <Step3
            changePreStep={this.handlePreStep}
            changeNextStep={this.handleNextStep}
          />
        );
        break;
      case 4:
        currentPage = (
          <Step4
            changePreStep={this.handlePreStep}
            changeNextStep={this.handleNextStep}
          />
        );
        break;
      case 5:
        currentPage = (
          <Step5
            changePreStep={this.handlePreStep}
            changeNextStep={this.handleNextStep}
          />
        );
        break;
      case 6:
        currentPage = <Step6 changePreStep={this.handlePreStep} />;
        break;
      default:
        break;
    }

    return (
      <div className="make-class-wrapper">
        <div className="make-class">
          <HeaderWhite />
          <div className="main-section">
            <NewNavigation currentPageNum={this.state.currentPage} />
            {currentPage}
          </div>
        </div>
      </div>
    );
  }
}

export default MakeClass;

//"buttons-next"
