export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";

export const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";

export const getProductList = (payload) => ({
  type: GET_PRODUCT_LIST,
  payload,
});
export const addNewProduct = (payload) => ({
  type: ADD_NEW_PRODUCT,
  payload,
});
