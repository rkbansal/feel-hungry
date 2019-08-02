import React from "react";
import "./cart.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToState } from "../../actions/main";

const CartHeader = ({ addToState, listInputOpen, priorData, newName }) => {
  const inputChange = e => {
    addToState({ newName: e });
  };
  const inputKeyUp = e => {
    if (e.keyCode === 27) {
      addToState({
        newName: priorData.listName,
        listInputOpen: false
      });
      // addToState({listInputOpen : false})
    }
  };
  const changeListName = e => {
    e.stopPropagation();
    addToState({ listInputOpen: true });
    // setTimeout(() => {foc.focus();}, 100);
  };
  return (
    <div className="cart_header">
      <div className="cart_header_body">
        <div className="cart_header_name">
          <input
            className={listInputOpen ? "list_name_input" : "hide"}
            onChange={e => inputChange(e.target.value)}
            onClick={e => changeListName(e)}
            // ref={ip => {foc = ip;}}
            onKeyUp={e => inputKeyUp(e)}
            defaultValue={newName}
            // autoFocus={listInputOpen}
          />
          <h2 className={listInputOpen ? "hide" : ""}>{newName}</h2>
          <FontAwesomeIcon
            className="fa-Pen"
            icon={faPenFancy}
            onClick={e => changeListName(e)}
          />
        </div>
      </div>
    </div>
  );
};

CartHeader.prototype = {
  addToState: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  priorData: state.main.priorData,
  newName: state.main.newName,
  listInputOpen: state.main.listInputOpen
});

export default connect(
  mapStateToProps,
  { addToState }
)(withRouter(CartHeader));
