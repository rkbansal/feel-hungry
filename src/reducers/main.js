import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const productItemsData = require("../data/product.json");

const initialState = {
  productItemsData,
  listInputOpen: false,
  cartItems: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  let index;

  switch (type) {
    // ADD_TO_CART
    case ADD_TO_CART:
      if (payload.quantity < payload.available) {
        payload.quantity === 0
          ? (payload.quantity = payload.startPoint)
          : (payload.quantity += payload.variation);

        index = state.cartItems.findIndex(e => {
          return e.productId === payload.productId;
        });
        if (index === -1) {
          return { ...state, cartItems: [...state.cartItems, payload] };
        } else {
          return {
            ...state,
            cartItems: [
              ...state.cartItems.slice(0, index),
              payload,
              ...state.cartItems.slice(index + 1)
            ]
          };
        }
      } else {
        return { ...state };
      }

    // REMOVE_FROM_CART
    case REMOVE_FROM_CART:
      return { ...state };

    default:
      return state;
  }
}
