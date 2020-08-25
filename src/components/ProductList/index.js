import React from 'react'
import Product from '../Product'


const ProductList = (props) => (
  <table>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Weight</th>
        <th>Availability</th>
        <th>URL</th>
        <th>Price_tier</th>
        <th>Price Range</th>
        <th>Unit Cost</th>
        <th>Is Editable</th>
      </tr>
    </thead>
    <tbody>
      {props.productList.map((product)=>(
        <Product product={product} />
      ))}
    </tbody>
  </table>
)

export default ProductList
