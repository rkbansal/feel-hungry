import React from "react";
import "./list.css";
import { connect } from "react-redux";

const Priority = ({ isActive, item }) => {
  return (
    <div className="priority">
      <div
        className={isActive ? "round_btn_active round_btn" : "round_btn"}
        style={{ backgroundColor: item[1] }}
      />
      <p className={isActive ? "p" : ""}>{item[0]}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  isActive: state.main.isActive
});

export default connect(mapStateToProps)(Priority);
