import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./home.css";

const OneHeader = ({ searchHide }) => {
  return (
    <div className="one_header">
      <div className="infinite_header">
        <div className="space" />
        <input className={searchHide ? "search_input" : "hide"} type="text" />
        <FontAwesomeIcon className="back_n_search" icon={faSearch} />
      </div>
      <h1>Grocery Shop</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  searchHide: state.main.searchHide
});

export default connect(mapStateToProps)(OneHeader);
