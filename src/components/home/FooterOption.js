import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterOption = ({ isActive, item, onClick }) => {
  return (
    <div className="footer_icon" onClick={onClick}>
      <FontAwesomeIcon
        className={isActive ? "fa-icon footer_active_icon" : "fa-icon"}
        icon={item[1]}
      />
      <p className={isActive ? "footer_active_icon" : ""}>{item[0]}</p>
    </div>
  );
};

export default FooterOption;
