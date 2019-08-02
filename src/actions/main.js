import {
  ADD_TO_STATE,
  CHANGE_PRIORITY,
  CHANGE_LIST_NAME,
  SEARCH_HIDE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  REMOVE_LIST
} from "./types";
export const changeListName = () => dispatch => {
  dispatch({
    type: CHANGE_LIST_NAME
  });
};
export const addToState = value => dispatch => {
  dispatch({
    type: ADD_TO_STATE,
    payload: value
  });
};
export const handleSearchHide = () => dispatch => {
  dispatch({
    type: SEARCH_HIDE
  });
};
// ADD TO CART
export const addToCart = value => dispatch => {
  console.log("ACTION ========", value);

  dispatch({
    type: ADD_TO_CART,
    payload: value
  });
};
//  REMOVE FROM CART
export const removeFromCart = value => dispatch => {
  console.log("ACTION ========", value);

  dispatch({
    type: REMOVE_FROM_CART,
    payload: value
  });
};

export const lesToCart = ({ value }) => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: { les: value }
  });
};

export const clearCart = () => dispatch => {
  dispatch({
    type: CLEAR_CART
  });
};

export const removeList = ({ value }) => dispatch => {
  dispatch({
    type: REMOVE_LIST,
    payload: value
  });
};

export const priorityChange = ({ value }) => dispatch => {
  dispatch({
    type: CHANGE_PRIORITY,
    payload: value
  });
};
