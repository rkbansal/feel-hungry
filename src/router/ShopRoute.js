import { Route, withRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import React, { Component } from 'react';
import ShopHome from '../components/shop/shopHome/ShopHome';
import FreshFruits from '../components/shop/freshFruits/FreshFruits';

class ShopRoute extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/' component={ShopHome}/>
        <Route path='/shop/fresh-fruits' component={FreshFruits}/>
      </Switch>
    )
  }
}

export default withRouter(ShopRoute);