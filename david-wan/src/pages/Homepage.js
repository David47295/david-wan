import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Home from "./Home"
import Projects from "./Projects"
import {Route,HashRouter} from "react-router-dom";

class Homepage extends Component {
  render() {
    return(
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Home}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Homepage
