import React from "react";
import "./list.css";
import { withRouter } from "react-router-dom";

const EmptyList = ({ history }) => {
  const addNewList = () => {
    history.push("/list/new-list");
  };
  return (
    <div className="empty_list">
      <div className="empty_list_body">
        <img
          className="empty_list_body_img"
          src={require("../../data/images/emptycart.png")}
          alt=""
        />
        <h2>Your List is Empty</h2>
        <p>
          Create list and add them to your trolley for an easier shopping
          experience
        </p>
      </div>
      <div className="empty_list_btn">
        <div className="add_list_btn" onClick={addNewList}>
          <p>Add List</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(EmptyList);
