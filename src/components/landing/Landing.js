import React, { Fragment } from "react";
import Courses from "./Courses";
import "./landing.css";
import Special from "./Special";
import { connect } from "react-redux";

const Landing = ({ data }) => {
  return (
    <Fragment>
      <Special />
      <Courses />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  data: state.data
});
export default connect(mapStateToProps)(Landing);
