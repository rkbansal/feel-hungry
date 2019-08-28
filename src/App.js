import React from "react";
import { withRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import AppRoute from "./router/AppRoute";

const App = ({ location }) => {
  return (
    <div className="App">
      <Header />
      <AppRoute />
    </div>
  );
};

export default withRouter(App);
