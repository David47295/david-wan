import React, {Component} from "react";
import AboutMe from './AboutMe';
import Overview from './Overview/Overview';
import '../../style/Home.css';


class Home extends Component {
  render() {
    return(
      <div className="home">
        <h1>David Wan</h1>
        <div className="summary-container">
          <div className="logo-summary">
            <div className="summary">
              <p>
              University of Toronto Scarborough
              <br/>Computer Science Specialist
              <br/>Information Systems stream
              </p>

            </div>
            <div className="logo"></div>
          </div>
        </div>
        <Overview/>
      </div>
    )
  }
}

export default Home;
