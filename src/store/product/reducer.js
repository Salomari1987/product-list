import {
  SET_PRODUCT
} from "./constants";

const initialState = {
  productList: [],
  currentProduct: {}
}


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT:
      var currentProduct = state.productList.filter((product) => parseInt(product._id) == parseInt(payload.id))[0]
      return {...state, currentProduct: currentProduct}
    default:
      return state

  }
}

