import {
  SET_PRODUCT,
  EDIT_PRODUCT,
} from './constants'


export const setProductToEdit = (id) => {
  return dispatch => {
    dispatch({ type: SET_PRODUCT, payload: {id}})
  }
};

export const editProduct = details => {
  return dispatch => {
    dispatch({ type: EDIT_PRODUCT, payload: {details}})
  }
}
