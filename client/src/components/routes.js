import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import ActNew from "./acts/new";
import Register from "./sessions/register";
import Login from "./sessions/login";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/acts/new" component={ActNew} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
}

export default Routes;