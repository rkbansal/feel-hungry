import React from "react";
import "./list.css";
import Priority from "./Priority";

const NewList = () => {
  const a = [["High", "Red"], ["Medium", "Yellow"], ["Low", "Green"]];

  return (
    <div className="new_list">
      <div className="new_list_form">
        <div className="new_list_label">
          <p>Add List Name</p>
          <input className="new_list_label_input" type="text" onChange="" />
        </div>
        <div className="new_list_label">
          <p>List Type</p>
          <select>
            <option>Specific Date</option>
            <option>Monthly</option>
            <option>Weakly</option>
          </select>
          <input />
        </div>
        <div className="set_priority">
          {a.map(item => {
            return <Priority item={item} key={item[0]} />;
          })}
        </div>
      </div>
      <div className="empty_list_btn">
        <div
          className="add_list_btn"
          // onClick={addNewList}
        >
          <p>Create List</p>
        </div>
        <div className="clear_list">
          <p>Clear List</p>
        </div>
      </div>
    </div>
  );
};

export default NewList;
