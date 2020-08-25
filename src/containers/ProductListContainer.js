import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList'
import {withRouter} from "react-router-dom";

class ProductListContainer extends Component {
  render() {
    return (
      <ProductList
        productList={this.props.productList}
      />
    )
  }
}


const mapStateToProps = state => ({
  productList: state.product.productList
})

const mapDispatchToProps = dispatch => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  ProductListContainer
))
