import React from 'react';
import { get } from '../../services/http';

export default class Cart extends React.Component {
  state = {
    products: []
  }

  async componentDidMount() {
    const productResponse = await get('/products?limit=6');
    this.setState({
      products: productResponse.data
    });
  }

  render () {
    return <div>
        Cart
    </div>
  }
}