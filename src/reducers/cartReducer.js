import { GET_CART_ITEMS } from "../actions/cart.actions";

const initState = {
  inCart: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return state.inCart;

    default:
      return state;
  }
};
