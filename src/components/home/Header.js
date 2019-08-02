import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./home.css";

const Header = ({ history, searchHide }) => {
  const goToHome = () => {
    history.push("/");
  };
  return (
    <div className="header">
      <div className="header_nav">
        <FontAwesomeIcon className="header_back" icon={faArrowLeft} />
        <div className="header_logo" onClick={goToHome}>
          <h2>GS</h2>
        </div>
        <div className="space" />
        <input className={searchHide ? "search_input" : "hide"} type="text" />
        <FontAwesomeIcon className="header_search" icon={faSearch} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  searchHide: state.main.searchHide
});

export default connect(mapStateToProps)(withRouter(Header));
