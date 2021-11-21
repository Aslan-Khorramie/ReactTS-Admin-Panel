import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import pages
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import Item2 from "./pages/Item2/Item2";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/item2" component={Item2} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
