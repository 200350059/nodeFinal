import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import ActNew from "./acts/new";
import ActIndex from "./acts/index";
import ActShow from "./acts/show";
import ActEdit from "./acts/edit";
import ActDestroy from "./acts/destroy";
import Register from "./sessions/register";
import Login from "./sessions/login";
import Logout from "./sessions/logout";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/acts/new" component={ActNew} />
      <Route exact path="/acts" component={ActIndex} />
      <Route exact path="/acts/:id" component={ActShow} />
      <Route exact path="/acts/:id/edit" component={ActEdit} />
      <Route exact path="/acts/:id/destroy" component={ActDestroy} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      
    </Switch>
  );
}

export default Routes;