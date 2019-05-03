import React, {Component} from "react";
import Project from '../components/Works/Project';
import projectdata from '../components/Works/ProjectsData.js';
import '../style/Projects.css';

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {projects : []};
    this.generateElements = this.generateElements.bind(this);
  }
  componentDidMount() {
    this.generateElements();
  }

  generateElements() {
    let new_state = {
      projects : Object.keys(projectdata).map((p) => {
                    let project = projectdata[p];
                    return (<Project projectname={project.name} description={project.description}/>);
                  })
    };
    this.setState(new_state);
  }

  render() {
    return(
      <div className="projects">
        <h1>These are my works!</h1>
        <div className="projects-content">
        {this.state.projects}
        </div>
      </div>
    )
  }
}

export default Works;
