import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

class NavBarButton extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

  }

  onClick() {
    this.props.history.push(this.props.to);
  }

  render() {
    return(
      <li onClick={this.onClick}>{this.props.name}</li>
    );
  }
}

export default withRouter(NavBarButton)
