import React, { Component } from "react";
import HeaderWhite from "Components/HeaderWhite";
import NewNavigation from "Components/NewNavigation";
import Step1 from "Pages/MakeClass/Step1";
// import Step2 from "Pages/MakeClass/Step2";
// import Step3 from "Pages/MakeClass/Step3";
import Step4 from "Pages/MakeClass/Step4";
import Step5 from "Pages/MakeClass/Step5";
import Step6 from "Pages/MakeClass/Step6";
import "./MakeClass.scss";

export class MakeClass extends Component {
  render() {
    return (
      <div className="make-class-wrapper">
        <div className="make-class">
          <HeaderWhite />
          <div className="main-section">
            <NewNavigation />
            <Step6 />
          </div>
        </div>
      </div>
    );
  }
}

export default MakeClass;
