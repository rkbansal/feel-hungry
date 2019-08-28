import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

// ADD TO CART
export const addToCart = value => dispatch => {
  dispatch({ type: ADD_TO_CART, payload: value });
};

//  REMOVE FROM CART
export const removeFromCart = value => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: value
  });
};
