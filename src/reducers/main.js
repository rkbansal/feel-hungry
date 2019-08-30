import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const data = require("../data/data.json");

const initialState = {
  data,
  courseList: ["Starters", "Desert", "Main Course", "Beverages"]
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
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
