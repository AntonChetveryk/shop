import { GET_PRODUCT_LIST } from "../actions/products.action";
import { REDUCE_AVALIABLE } from "../actions/products.action";
import { INCREASE_AVALIABLE } from "../actions/products.action";
import { ADD_NEW_PRODUCT } from "../actions/products.action";

const initState = {
  products: [
    {
      name: "iPhone 4s",
      price: 200,
      available: 2,
      id: 1,
    },
    {
      name: "Nokia 2110",
      price: 600,
      available: 0,
      id: 2,
    },
    {
      name: "Samsung s3",
      price: 345,
      available: 2,
      id: 3,
    },
    {
      name: "LG G2",
      price: 90,
      available: 1,
      id: 4,
    },
    {
      name: "Nokia 9930",
      price: 250,
      available: 3,
      id: 5,
    },
    {
      name: "iPhone X",
      price: 123,
      available: 4,
      id: 6,
    },
    {
      name: "Meizu m9",
      price: 656,
      available: 23,
      id: 7,
    },
    {
      name: "Sonny 9",
      price: 564,
      available: 234,
      id: 8,
    },
    {
      name: "iPhone 6 plus",
      price: 434,
      available: 7,
      id: 9,
    },
    {
      name: "Alcatel noname",
      price: 123,
      available: 7,
      id: 10,
    },
  ],
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return { ...state, products: action.payload };
    case REDUCE_AVALIABLE:
      const reducedArr = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.available -= 1;
          return product;
        } else {
          return product;
        }
      });
      return { ...state, products: reducedArr };
    case INCREASE_AVALIABLE:
      const increasedArr = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.available += 1;
          return product;
        } else {
          return product;
        }
      });
      return { ...state, products: increasedArr };
    case ADD_NEW_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
};
