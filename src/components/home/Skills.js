import React from 'react';
import SkillCell from '../skills/SkillCell'

import '../../style/Skills.css'

export default function Skills() {
    return (
        <div id="skills">
            <h1>Skills</h1>
            <div id="skills-container">
                <SkillCell
                    skillId="ue4"
                    captionText="Game Development"
                />
                {/* <SkillCell
                    skillId="web-dev"
                    captionText="Web Development"
                /> */}
            </div>
        </div>
    )
}
