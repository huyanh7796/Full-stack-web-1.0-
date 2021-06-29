import React from 'react';
import './App.css';
import Item from './components/Item';

export default class App extends React.Component {
  state = {
    value: 'NGOC',
    lists: [1,2,3,4,5,6]
  }

  changeInput(event) {
    this.setState({
      value: event.target.value
    });
  }

  renderCustomElement() {
    if (this.state.value === 'Item') {
      return <Item index="1" />;
    } else if(this.state.value === 'Ngoc') {
      return 'Ngoc Cac'
    } else {
      return "ngoc"
    }
  }

  render() {
    return <div className="container">
    <h1>Input's value is {this.state.value} </h1>
    <input 
    value={this.state.value} 
    onChange={(event) => this.changeInput(event)} 
    placeholder="Enter value"
    ></input>
    {/* viet javascript o day */}
    
    {/* list rendering */}
    {
      this.state.lists.map(listItem => <Item index={listItem} key={listItem}/>)
    }
    {/* conditional redering */}
    {/* Cach 1: */}
    {
      this.state.value === 'Item' ? <Item index='1' />
        : ( this.state.value === 'NGOC' ? <div>NgocCac</div> : <div>Ngoc Oc</div>)
    }
    {/* Cach 2: Viet 1 method */}
    {this.renderCustomElement()}
    </div>;

  }
}