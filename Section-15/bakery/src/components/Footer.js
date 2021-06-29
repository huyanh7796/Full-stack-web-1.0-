import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt , faMailBulk} from '@fortawesome/free-solid-svg-icons';

export default class Footer extends React.Component {
  render() {
    return <footer className="footer">
      <div className="footer-info">
        <div className="footer-info__menu">
          <h3>Menu</h3>
          <nav>
            <span>Cake</span>
            <span>Bread & Panstry</span>
            <span>Beverages</span>
          </nav>
        </div>
        <div className="footer-info__contact">
          <div><FontAwesomeIcon icon={faMapMarkerAlt} /> Address: No.1 Nguyen Trai, Thanh Xuan, Ha Noi</div>
          <div><FontAwesomeIcon icon={faPhoneAlt} /> Tel: +84 0506070809</div>
          <div><FontAwesomeIcon icon={faMailBulk} /> Mail: bakery@gmail.com</div>
        </div>
      </div>
      <div className="copyright">
        <span>Copyright 2021. All rights reserved by SomeOne</span>
      </div>
    </footer>;
  }
}