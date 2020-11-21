import React from 'react';

export default function ContactMethod(props) {
    return (
        <div className="method">
            <b className="title">{props.title}</b>
            <div className={"icon " + props.class}></div>
            <span className="link">(<a target="_blank" rel="noreferrer" href={props.url}>{props.text}</a>)</span>
        </div>
    )
}