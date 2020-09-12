export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
export const REDUCE_AVALIABLE = "REDUCE_AVALIABLE";
export const INCREASE_AVALIABLE = "INCREASE_AVALIABLE";
export const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";

export const getProductList = (payload) => ({
  type: GET_PRODUCT_LIST,
  payload,
});
export const addNewProduct = (payload) => ({
  type: ADD_NEW_PRODUCT,
  payload,
});
export const reduceAvailable = (payload) => ({
  type: REDUCE_AVALIABLE,
  payload,
});
export const increaseAvailable = (payload) => ({
  type: INCREASE_AVALIABLE,
  payload,
});
