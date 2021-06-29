import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class Header extends React.Component {
  render() {
    return <header className="header">
      <Link to='/'><img className="logo" src="logo.jpeg" alt="logo"/></Link>
      <nav className="navigator">
        <Link to='/menu' className="menu-button">Menu</Link>
        <div className="dropdown-content">
          <Link to='/cake'className="navlink">Cake</Link>
          <Link to='/bread&pastry' className="navlink">Bread & Pastry</Link>
          <Link to='/beverages' className="navlink">Beverages</Link>
        </div>
        <Link to='/ourstory' className='nav-item'>Our Story</Link>
        <Link to='/news&events' className='nav-item'>News & Events</Link>
      </nav>
    </header>;
  }
}