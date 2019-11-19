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
import MakeClass from "Pages/MakeClass";

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
          <Route exact path="/makeclass/:step" component={MakeClass} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
