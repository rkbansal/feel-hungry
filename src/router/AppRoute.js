import React from "react";
import { Switch } from "react-router";
import { Route, withRouter } from "react-router-dom";
import Landing from "../components/landing/Landing";
import List from "../components/list/List";
import Info from "../components/info/Info";

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/list" component={List} />
      <Route path="/info" component={Info} />
    </Switch>
  );
};

export default withRouter(AppRoute);
