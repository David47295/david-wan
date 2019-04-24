import React, {Component} from "react";
import '../../style/AboutMe.css'

class AboutMe extends Component {
  render() {
    return(
      <div className="aboutme">
        <h2 className="aboutme-hdr">About Me</h2>
        <p className="aboutme-descrip">
          I'm a third year Computer Science student who specializes in
          in Video Game Programming and Design, as well as Web Development (Frontend and Backend).
          I have experience with a wide array of programming languages and web technologies such as C++, Java, Python, Javascript, React Js., and MySQL.
        </p>
      </div>
    )
  }
}

export default AboutMe;
