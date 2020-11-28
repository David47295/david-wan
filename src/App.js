import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe'
import Resume from './pages/Resume';
import Credits from './pages/Credits';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
