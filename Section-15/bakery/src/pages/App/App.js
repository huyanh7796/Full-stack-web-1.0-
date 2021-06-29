import React from 'react';
import Home from './components/Home';
import Menu from './components/Menu';
import Cake from './components/Cake';
import Bread from './components/Bread';
import Beverages from './components/Beverages';
import Story from './components/Story';
import Events from './components/Events';
import {Switch, Route} from 'react-router-dom';
import { get } from '../../services/http';

export default class App extends React.Component {
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
    return <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/menu" component={Menu} />
          <Route path="/cake" component={Cake} />
          <Route path="/bread&pastry" component={Bread} />
          <Route path="/beverages" component={Beverages} />
          <Route path="/ourstory" component={Story} />
          <Route path="/news&events" component={Events} />
        </Switch>
      </main>
  }
}