import React from "react";

import "./App.css";

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Search from "./Components/Search";

import Types from "./Components/Types";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/">
          <Types/>
        </Route>
        </Switch>
      </Router>

      <Search name="Hidde" />
    </div>
  );
}

export default App;
