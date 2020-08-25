import configureStore from './configure'
import data from '../productData.json'


export const loadState = () => {
  try {
    return {
      product: {
        productList: data,
        currentProduct: {}
      }
    }
  } catch (err) {
    return {};
  }
};

export default configureStore(loadState())
