import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import User from "./User";
import SearchSwitch from "./SearchSwitch";
import { AppBar } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static" color="default">
      <User />
      <SearchSwitch />
    </AppBar>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(withRouter(Header));
