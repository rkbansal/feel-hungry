import React from "react";
import { withRouter } from "react-router-dom";

import "./App.css";
import OneHeader from "./components/home/OneHeader";
import Header from "./components/home/Header";
import AppRoute from "./router/AppRoute";
import Footer from "./components/home/Footer";

const App = ({ location }) => {
  return (
    <div className="App">
      {location.pathname === "/" ? <OneHeader /> : <Header />}
      <AppRoute />
      <Footer />
    </div>
  );
};

export default withRouter(App);
