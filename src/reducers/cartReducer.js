import { GET_CART_ITEMS } from "../actions/cart.actions";
import { ADD_TO_CART } from "../actions/cart.actions";
import { REMOVE_FROM_CART } from "../actions/cart.actions";

const initState = {
  inCart: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, inCart: [...state.inCart, action.payload] };
    case REMOVE_FROM_CART:
      const filtredArr = state.inCart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, inCart: filtredArr };
    case GET_CART_ITEMS:
      return state.inCart;
    default:
      return state;
  }
};
