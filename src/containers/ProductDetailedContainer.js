import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductDetailed from '../components/ProductDetailed'
import {setProductToEdit, editProduct} from '../store/actions'
import { withRouter } from 'react-router-dom'


class ProductDetailedContainer extends Component {
  componentDidMount() {
    this.props.setProductToEdit()
  }

  render() {
    return (
      <ProductDetailed product={this.props.product} editProduct={this.props.editProduct}/>
    )
  }
}


const mapStateToProps = (state) => ({
  product: state.product.currentProduct
})


const mapDispatchToProps = (dispatch, ownProps) => ({
  setProductToEdit: () => dispatch(setProductToEdit(ownProps.match.params.product_id)),
  editProduct: (details) => {
    dispatch(editProduct(details))
    ownProps.history.push('/')
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  ProductDetailedContainer
))
