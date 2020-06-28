import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Home from './Home';
import AboutMe from './AboutMe'

import '../style/App.css'

export default function App() {
  return (
    <Router>
      <nav id="navbar">
        <Link to="/">Home</Link>
        <Link to="/aboutme">About Me</Link>
      </nav>

      <div id='content-container'>
        <Switch>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
