import React from "react";
import { Switch } from "react-router";
import { Route, withRouter } from "react-router-dom";

// import Shop from "../components/shop/Shop";
// import Cart from "../components/cart/Cart";

const AppRoute = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={Shop} />
      <Route path="/shop" component={Shop} />
      <Route path="/cart" component={Cart} /> */}
    </Switch>
  );
};

export default withRouter(AppRoute);
