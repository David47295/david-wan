import React from 'react';
import SkillCell from '../skills/SkillCell'
import data from '../../skills.json'

import '../../style/Skills.css'

export default function Skills() {
    const skillsData = data.skills;
    const skillCells = skillsData.map((skill, i) => {
        return (
            <SkillCell
                key={i}
                skillId={skill.id}
                captionText={skill.captionText}
            />
        )
    })
    return (
        <div id="skills">
            <h1>Skills</h1>
            <div id="skills-container">
                {skillCells}
            </div>
        </div>
    )
}
