import React from 'react'


const Product = ({product}) => (
  <tr>
    <td>{product.product_name}</td>
    <td>{product.weight}</td>
    <td>{product.availability}</td>
    <td>{product.url}</td>
    <td>{product.price_tier}</td>
    <td>{product.price_range}</td>
    <td>{product.unit_cost}</td>
    <td>{product.isEditable ? <a href="#">Edit {product._id}</a> : null}</td>
  </tr>
)

export default Product
