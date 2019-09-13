import React, {Component} from "react";
import '../../style/Banner.css'

class Banner extends Component {
  render() {
    return(
      <div className="banner">
        <div className='blur-backdrop'>
          <div className="banner-summary">
            <div className="summary">
              <h1>David Wan</h1>
              <p>
              Student at the University of Toronto Scarborough
              <br/>Hobbyist Game Developer
              <br/>Full Stack Web Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner;
