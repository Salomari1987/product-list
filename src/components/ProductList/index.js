import React from 'react'
import Product from '../Product'
import {Table} from 'react-bootstrap'

const ProductList = (props) => (
  <Table>
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
        <Product key={product._id} product={product} />
      ))}
    </tbody>
  </Table>
)

export default ProductList
