import React from 'react';
import '../style/Resume.css'
import Experience from '../components/Resume/Experience';
import data from '../data.json';

class Resume extends React.Component {
    render() {
        const work_exp = data.work_experience.map((x, index) => {
            return (
                <Experience role={x.role} location={x.location} tasks={x.tasks} key={index}/>
            )
        })
        return (
            <div id="resume">
                <b class="main-header">Work Experience</b>
                {work_exp}
            </div>
        )
    }
}

export default Resume;