import React from "react";
import { Route, withRouter } from "react-router-dom";
import { Switch } from "react-router";
import ShopHome from "../components/shop/shopHome/ShopHome";
import FreshFruits from "../components/shop/freshFruits/FreshFruits";

const ShopRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={ShopHome} />
      <Route path="/shop/fresh-fruits" component={FreshFruits} />
    </Switch>
  );
};

export default withRouter(ShopRoute);
