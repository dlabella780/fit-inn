import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}