import {
  ADD_TO_STATE,
  SEARCH_HIDE,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "../actions/types";

const productItemsData = require("../data/product.json");

const initialState = {
  productItemsData,
  listInputOpen: false,
  cartItems: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_STATE:
      return Object.assign({}, state, { ...payload });

    case SEARCH_HIDE:
      return Object.assign({}, state, { searchHide: !state.searchHide });

    // ADD_TO_CART
    case ADD_TO_CART:
      return { ...state };

    // REMOVE_FROM_CART
    case REMOVE_FROM_CART:
      return { ...state };

    default:
      return state;
  }
}
