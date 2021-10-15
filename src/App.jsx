import Header from "./components/Header";
import "./components/fontAwesomeIcons"
import Description from './components/Description';
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <div className="container-fluid" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
              <Description />
            </div>
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
