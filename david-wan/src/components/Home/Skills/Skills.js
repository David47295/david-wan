import React, {Component} from 'react';
import SkillsElemUE4 from './SkillsElemUE4'
import SkillsElemWebDev from './SkillsElemWebDev'
import SkillsElemIT from './SkillsElemIT'
import '../../../style/Skills.css';

class Skills extends Component {
  render() {
    return(
      <div className="overview">
        <p>Skills</p>
        <SkillsElemUE4/>
        <SkillsElemWebDev/>
        <SkillsElemIT/>
      </div>
    )
  }
}

export default Skills;
