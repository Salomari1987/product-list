import {
  SET_PRODUCT,
} from './constants'


export const setProductToEdit = (id) => {
  return dispatch => {
    dispatch({ type: SET_PRODUCT, payload: {id}})
  }
};

