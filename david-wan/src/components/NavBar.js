import React, {Component} from 'react';
import NavBarButton from './NavBarButton';
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
          <NavBarButton to="/" name="Home"></NavBarButton>
          <NavBarButton to="/projects" name="Works"></NavBarButton>
        </ul>
      </nav>
    );
  }
}

export default NavBar
