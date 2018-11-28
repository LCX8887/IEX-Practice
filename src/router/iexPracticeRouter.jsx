import { Route, Router, hashHistory } from "react-router";
import React from "react";
import App from "../App";
import { MarketView } from "../views/index";

const iexPracticeRouter = () => {
  return (
    <Router>
      <Route path="/" component={App}>
        <Route path="/stocks" component={MarketView} exact />
        <Route path="/stocks/:selectedSymbol" component={SymbolDetails} exact />
        {/* <Route path="stocks/:symbol" component={SymbolDetails} /> */}
      </Route>
    </Router>
  );
};
