import React from 'react';
import Skills from '../components/home/Skills'

import '../style/Home.css'

export default function Home() {
    return (
        <div id="home">
            <div className="content-container">
                <div className="title">David Wan</div>
                <p>Computer Science Specialist</p>
                <p>Full Stack Developer</p>
                <p>Hobbyist Game Developer</p>
            </div>
            {/* <Skills /> */}
        </div>
    )
}