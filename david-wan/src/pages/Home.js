import React, {Component} from "react";
import AboutMe from '../components/Home/AboutMe';
import Skills from '../components/Home/Skills/Skills';
import Banner from '../components/Home/Banner';
import '../style/Home.css';


class Home extends Component {
  render() {
    return(
      <div className="home">
        <Banner/>
        <AboutMe/>
        <Skills/>
      </div>
    )
  }
}

export default Home;
