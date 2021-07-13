import React from 'react';
import ProductInCart from './components/ProductInCart';
import { Row, Col } from 'antd';
import './components/style.css';

export default class FeatureProduct extends React.Component {
  render () {
    return <div className="feature-product">
      <h3>Featured Products</h3>
      <div className="product-container">
        <Row gutter={60}>
          
        </Row>
      </div>
    </div>;
  }
}