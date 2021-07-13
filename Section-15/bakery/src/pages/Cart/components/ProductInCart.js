import React from 'react';
import config from '../../../config/index';
import './style.css';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { checkProductExists } from '../../../helpers/index';

const Component = class ProductInCart extends React.Component {
  render () {
    return <div className="product-item">
        <Row>
            <Col span={8}>
            <img src={`${config.IMAGE_URL}${this.props.product.thumbnail}`}></img>
            </Col>
            <Col span={8}>
            <h4>{this.props.product.title}</h4>
            </Col>
            <Col span={8}>
                {
                    checkProductExists(this.props.cart.products, this.props.product) ?
                    <Button type='danger'>Added</Button> :
                    <Button type='primary' onClick={() => this.props.addProduct(this.props.product)}>Add to cart</Button>
                }    
            </Col>
        </Row>
    </div>
  }
}

const mapState = (state) => ({
  cart: state.cart
})

const mapDispatch = (dispatch) => ({
  addProduct: dispatch.cart.addProduct,
})

export default connect(
  mapState,
  mapDispatch
)(Component);