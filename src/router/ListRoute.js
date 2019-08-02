import React from "react";
import { Route, withRouter } from "react-router-dom";
import { Switch } from "react-router";
import NewList from "../components/list/NewList";
import ListEvent from "../components/list/ListEvent";
import EmptyList from "../components/list/EmptyList";

const ListRoute = () => {
  return (
    <Switch>
      <Route exact path="/list" component={ListEvent} />
      <Route path="/list/new-list" component={NewList} />
      <Route path="/list/empty-list" component={EmptyList} />
    </Switch>
  );
};

export default withRouter(ListRoute);
