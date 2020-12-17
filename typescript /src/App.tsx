import React from "react";
import Search from "./Components/Search";
import "./App.css";
import Types from "./Components/Types";
import Todo from "./Components/Todo";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="header">
        <nav className="header__navigation">
          <ul className="navigation">
            <li className="navigation__li ">
              <Link to="/" className="navigation__link ">Home</Link>
            </li>

            <li className="navigation__li ">
              <Link to="/types" className="navigation__link">Users</Link>
            </li>
            <li className="navigation__li ">
              <Link to="/todo" className="navigation__link">Todo</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Search name="Hidde" />
          </Route>
          <Route path="/types">
            <Types />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
