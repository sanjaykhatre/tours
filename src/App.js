import React from "react";
import Home from "./views/Home";
import Package from "./views/Package";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/package/:id" component={Package} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
