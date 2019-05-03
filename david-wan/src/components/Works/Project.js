import React, {Component} from "react";

class Project extends Component {
  render() {
    return(
      <div id={this.props.projectname} className="project">
        <h2>{this.props.projectname}</h2>
        <div className="project-thumbnail"></div>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Project;
