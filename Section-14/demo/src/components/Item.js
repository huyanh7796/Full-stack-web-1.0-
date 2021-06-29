import React from 'react';
import './Item.css'

export default class Item extends React.Component {
// //syntax su dung props
//     constructor(props) {
//     super(props);
// }

    render() {
        return <div className='item'>
            {this.props.index} Damn
            </div>
    }
}