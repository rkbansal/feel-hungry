import { Route, withRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import React, { Component } from 'react';
import NewList from '../components/list/NewList';
import ListEvent from '../components/list/ListEvent';

class ListRoute extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/list' component={ListEvent}/>
        <Route path='/list/new-list' component={NewList}/>
      </Switch>
    )
  }
}

export default withRouter(ListRoute);