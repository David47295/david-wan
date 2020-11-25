import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Home from './Home';
import AboutMe from './AboutMe'
import Resume from './Resume';
import Credits from './Credits';
import Contact from './Contact';

import '../style/App.css'

export default function App() {
  return (
    <Router>
      <nav id="navbar">
        <Link className="home-link" to="/"><div className="home-btn" /></Link>
        <Link to="/aboutme"><span>About Me</span></Link>
        <Link to="/resume"><span>Work Experience</span></Link>
        <Link to="/contact"><span>Contact</span></Link>
      </nav>

      <div id='content-container'>
        <Switch>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/credits">
            <Credits />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
