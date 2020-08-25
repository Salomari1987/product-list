import {
  SET_PRODUCT,
  EDIT_PRODUCT,
} from "./constants";

const initialState = {
  productList: [],
  currentProduct: {}
}


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT:
      const currentProduct = state.productList.filter((product) => parseInt(product._id) == parseInt(payload.id))[0]
      return {...state, currentProduct: currentProduct}
    case EDIT_PRODUCT:
      const newProduct = Object.assign({}, state.currentProduct, payload.details)
      const newProductList = state.productList.map( product => product._id === newProduct._id ? newProduct : product)
      return {...state, currentProduct: newProduct, productList: newProductList}
    default:
      return state

  }
}

