import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyClass from "Pages/MyClass";
import SignIn from "Pages/SignIn";
import SignUp from "Pages/SignUp";
import CommentManage from "Pages/CommentManage";
import Statics from "Pages/Statics";
import IntroStep1 from "Pages/IntroStep1";
import IntroStep2 from "Pages/IntroStep2";
import IntroStep3 from "Pages/IntroStep3";
import MakeClass1 from "Pages/MakeClass/MakeClass1";
import MakeClass2 from "Pages/MakeClass/MakeClass2";
import MakeClass3 from "Pages/MakeClass/MakeClass3";
import MakeClass4 from "Pages/MakeClass/MakeClass4";
import MakeClass5 from "Pages/MakeClass/MakeClass5";
import MakeClass6 from "Pages/MakeClass/MakeClass6";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/myclass" component={MyClass} />
          <Route exact path="/statics" component={Statics} />

          <Route exact path="/commentmanage" component={CommentManage} />
          <Route exact path="/intro/intro1" component={IntroStep1} />
          <Route exact path="/intro/intro2" component={IntroStep2} />
          <Route exact path="/intro/intro3" component={IntroStep3} />
          <Route exact path="/makeclass/makeclass1" component={MakeClass1} />
          <Route exact path="/makeclass/makeclass2" component={MakeClass2} />
          <Route exact path="/makeclass/makeclass3" component={MakeClass3} />
          <Route exact path="/makeclass/makeclass4" component={MakeClass4} />
          <Route exact path="/makeclass/makeclass5" component={MakeClass5} />
          <Route exact path="/makeclass/makeclass6" component={MakeClass6} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
