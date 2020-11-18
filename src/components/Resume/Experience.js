import React from 'react';

export default function Experience(props) {
    const tasks = props.tasks.map((task, index) => {
        return (
            <li key={index}>{task}</li>
        )
    })
    return (
        <div className="work-experience">
            <b className="role">{props.role}</b>
            <p className="location">{props.location}</p>
            <ul>
                {tasks}
            </ul>
        </div>
    )
}