import React, {Component} from "react";
import '../../style/Banner.css'

class Banner extends Component {
  render() {
    return(
      <div className="banner">
        <div className="banner-summary">
          <div className="summary">
            <h1>David Wan</h1>
            <p>
            University of Toronto Scarborough
            <br/>Computer Science Specialist
            <br/>Information Systems stream
            </p>

          </div>
        </div>
      </div>
    )
  }
}

export default Banner;
