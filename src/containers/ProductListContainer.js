import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

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

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductListContainer
)
