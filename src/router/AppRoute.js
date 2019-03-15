import { Route, withRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import React, { Component } from 'react';
import Shop from '../components/shop/Shop';
import Cart from '../components/cart/Cart';
import List from '../components/list/List';

class AppRoute extends Component {
  render(){

    return(
      <Switch>
        <Route exact path='/' component={Shop}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/list' component={List}/>
      </Switch>
    )
  }
}

export default withRouter(AppRoute);