import React from 'react';

export default function Experience(props) {
    const tasks = props.tasks.map((task, index) => {
        return (
            <li key={index}>{task}</li>
        )
    })
    return (
        <div class="work-experience">
            <b class="role">{props.role}</b>
            <p class="location">{props.location}</p>
            <ul>
                {tasks}
            </ul>
        </div>
    )
}