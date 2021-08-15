import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

//Custom Component Imports
import Header from "./Header";
import { HeroesList } from "./HeroesList";
import { HeroItem } from "./HeroItem";
import { PageNotFound } from "./PageNotFound";

const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={HeroesList} />
          <Route path="/:id" component={HeroItem} />
          <Route path="/404" component={PageNotFound} />

          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
};


export default App;
