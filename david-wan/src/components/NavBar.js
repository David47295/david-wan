import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import '../style/NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {topOfPg : true};

    this.onScroll = this.onScroll.bind(this);

  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll() {
    // console.log(window.scrollY);
    let scroll = window.scrollY;
    if (scroll === 0) {
      this.setState({topOfPg : true});
    } else {
      this.setState({topOfPg : false});
    }
  }

  render() {
    return(
      <nav className={this.state.topOfPg ? "navbar" : "navbar-fixed"}>
        <ul>
          <li className="nav_elmnt"><NavLink to="/">Home</NavLink></li>
          <li className="nav_elmnt"><NavLink to="/works">Works</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar
