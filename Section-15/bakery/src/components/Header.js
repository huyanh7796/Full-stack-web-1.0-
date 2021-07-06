import React from 'react';
import { Link } from 'react-router-dom';
import { get } from '../services/http';
import { Row, Col, Dropdown, Menu } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './style.css';

export default class Header extends React.Component {
  state = {
    categories: []
  };

  async componentDidMount() {
    try {
      const categoryResponse = await get('/categories');

      this.setState({ 
        categories: categoryResponse.data
      });
    } catch (err) {
      //
    }
  }

  render() {
    const menu = <Menu>
      {
        this.state.categories.map(category => <Menu.Item key={category._id}>
          <Link to={`/products?category=${encodeURIComponent(category.title)}`}>
            { category.title }
          </Link>
        </Menu.Item>)
      }
    </Menu>

    return <Row className="header">
        <Col span={8}>
          <Link to="/">
            <img className="logo" src="logo.jpeg" alt="Logo"/>
          </Link>
          <Dropdown overlay={menu}>
            <span className="menu-indicator">Menu</span>
          </Dropdown>
          <Link to="/">
            <span className="menu-indicator">Our Story</span>
          </Link>
          <Link to="/">
            <span className="menu-indicator">News & Events</span>
          </Link>
        </Col>
        <Col span={1} offset={15}>
          <Link to ="/cart">
            <span className="cart-icon"><ShoppingCartOutlined style={{ fontSize: '30px', color: 'rgba(0,0,0,.95)'}}/></span>
          </Link>
        </Col>  
      </Row>
  }
}