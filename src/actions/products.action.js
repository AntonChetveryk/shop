export const GET_PERSON_LIST = "GET_PERSON_LIST";

export const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";

export const PERSONS_FETCH_DATA_SUCCESS = "PERSONS_FETCH_DATA_SUCCESS";

export const getPersonsList = (payload) => ({
  type: GET_PERSON_LIST,
  payload,
});

export function personsFetchData(url) {
  return (dispatch) => {
    fetch(url)
      .then((res) => {
        if (res.status < 400) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then((payload) => dispatch(getPersonsList(payload.results)));
  };
}

export const addNewProduct = (payload) => ({
  type: ADD_NEW_PRODUCT,
  payload,
});
