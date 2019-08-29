import React, { Fragment } from "react";
import Courses from "./Courses";
import "./landing.css";
import Special from "./Special";

const Landing = () => {
  return (
    <Fragment>
      <Special />
      <Courses />
    </Fragment>
  );
};

export default Landing;
