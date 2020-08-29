import React from 'react';

export default function SkillCell(props) {
    return (
        <div id={props.skillId} className="skill-icon">
            <p className="skills-caption">{props.captionText}</p>
        </div>
    );
}