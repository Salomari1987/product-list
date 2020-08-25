import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetailed = ({product}) => {
  const { register, handleSubmit, watch, errors, formState } = useForm();
  const onSubmit = data => console.log(data);

  const watchPriceTier = watch('price_tier')
  const watchProductName = watch('product_name')
  const watchWeight = watch('weight')
  const watchURL = watch('availability')
  const watchProductRange = watch('price_range')

  const submitEnabled = watchPriceTier && watchProductName && watchWeight && watchURL && watchProductRange ? true : false

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="product_name">
        <Form.Label>Product Name</Form.Label>
        <Form.Control name="product_name" type="text" placeholder="laptop 15' mac pro" defaultValue={product.product_name} ref={register({required: true})}/>
        {errors.product_name && <span>This field is required</span>}
      </Form.Group>
      <Form.Group controlId="weight">
        <Form.Label>Weight</Form.Label>
        <Form.Control name="weight" type="text" placeholder="15 KGs" defaultValue={product.weight} ref={register({required: true})}/>
        {errors.weight && <span>This field is required</span>}
      </Form.Group>
      <Form.Group controlId="availability">
        <Form.Label>Availability</Form.Label>
        <Form.Control name="availability" type="number" placeholder="12313" defaultValue={product.availability} ref={register()}/>
      </Form.Group>
      <Form.Group controlId="url">
        <Form.Label>URL</Form.Label>
        <Form.Control name="url" type="text" placeholder="https://example.com" defaultValue={product.url} ref={register({required: true})}/>
        {errors.url && <span>This field is required</span>}
      </Form.Group>
      <fieldset name="price_tier">
        <Form.Group name="price_tier" controlId="price_tier" as={Row} >
          <Form.Label as="legend" name="price_tier" column sm={2}>
            Price tier
          </Form.Label>
          <Col name="price_tier" sm={10}>
            <Form.Check
              type="radio"
              label="Budget"
              name="price_tier"
              id="budget"
              value="budget"
              ref={register({required: true})}
            />
            <Form.Check
              type="radio"
              label="Premium"
              name="price_tier"
              id="premium"
              value="premium"
              ref={register({required: true})}
            />
          </Col>
          {errors.price_tier && <span>This field is required</span>}
        </Form.Group>
      </fieldset>
      <Form.Group controlId="price_range" >
        <Form.Label>Price range</Form.Label>
        <Form.Control name="price_range" as="select" defaultValue={product.price_range} ref={register({required: true})}>
          {watchPriceTier === 'budget' ? (
            <React.Fragment>
              <option value="$1-10">$1-10</option>
              <option value="$11-20">$11-20</option>
              <option value="$20-50">$20-50</option>
            </React.Fragment>) : watchPriceTier === 'premium' ? (
              <React.Fragment>
                <option value="$50-99">$50-99</option>
                <option value="$100-199">$100-199</option>
                <option value="$200+">$200+</option>
              </React.Fragment> ) : (
                <React.Fragment>
                  <option value="$1-10">$1-10</option>
                  <option value="$11-20">$11-20</option>
                  <option value="$20-50">$20-50</option>
                  <option value="$50-99">$50-99</option>
                  <option value="$100-199">$100-199</option>
                  <option value="$200+">$200+</option>
                </React.Fragment>
          )}
        </Form.Control>
        {errors.price_range && <span>This field is required</span>}
      </Form.Group>

      <Form.Group controlId="unit_cost">
        <Form.Label>Unit Cost</Form.Label>
        <Form.Control name="unit_cost" type="text" placeholder="$10" defaultValue={product.unit_cost} ref={register({required: true})}/>
        {errors.unit_cost && <span>This field is required</span>}
      </Form.Group>
      <Button type="submit" variant={submitEnabled ? 'primary' : 'secondary'} disabled={submitEnabled ? false : true} size="lg" block>Submit</Button>
    </Form>
  )
}

export default ProductDetailed
