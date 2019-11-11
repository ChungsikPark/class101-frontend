import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyClass from "./Pages/MyClass";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import MakeClass from "./Pages/MakeClass";
import CommentManage from "./Pages/CommentManage";
import Statics from "./Pages/Statics";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MyClass} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/statics" component={Statics} />
          <Route exact path="/makeclass" component={MakeClass} />
          <Route exact path="/commentmanage" component={CommentManage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
