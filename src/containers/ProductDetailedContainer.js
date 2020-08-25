import React, { Component } from 'react'
import { connect } from 'react-redux'
// import ProductDetailed from '../components/ProductDetailed'

class ProductListContainer extends Component {

  render() {
    return (
      <div
        product={this.props.product}
      />
    )
  }
}


const mapStateToProps = (state, ownProps) => ({
    product: state.product.productList.filter((product) => product._id == ownProps.match.params.product_id)[0]
  })


const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductListContainer
)
