import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Home from "./Home"
import Works from "./Works"
import {Route,HashRouter} from "react-router-dom";

class Homepage extends Component {
  render() {
    return(
      <HashRouter>
        <div>
          <NavBar/>

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/works" component={Works}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Homepage
