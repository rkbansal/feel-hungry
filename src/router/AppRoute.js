import React from "react";
import { Switch } from "react-router";
import { Route, withRouter } from "react-router-dom";

import Shop from "../components/shop/Shop";
import Cart from "../components/cart/Cart";
import List from "../components/list/List";

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Shop} />
      <Route path="/shop" component={Shop} />
      <Route path="/cart" component={Cart} />
      <Route path="/list" component={List} />
    </Switch>
  );
};

export default withRouter(AppRoute);
