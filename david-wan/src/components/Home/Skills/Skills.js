import React, {Component} from 'react';
import SkillsElemUE4 from './SkillsElemUE4'
import SkillsElemWebDev from './SkillsElemWebDev'
import SkillsElemIT from './SkillsElemIT'
import '../../../style/Skills.css';

class Skills extends Component {
  render() {
    return(
      <div className="skills">
        <h2 id="skills-hdr">Skills</h2>
        <SkillsElemUE4/>
        <SkillsElemWebDev/>
        <SkillsElemIT/>
      </div>
    )
  }
}

export default Skills;
