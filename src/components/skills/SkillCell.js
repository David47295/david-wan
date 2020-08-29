import React from 'react';

export default function SkillCell(props) {
    return (
        <div id={props.skillId}>
            <p className="skills-caption">{props.captionText}</p>
        </div>
    );
}