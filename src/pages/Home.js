import React from 'react';
import Skills from '../components/home/Skills'

import '../style/Home.css'

export default function Home() {
    return (
        <div id="home">
            <div className="content-container">
                <div className="title">David Wan</div>
                <div class="description">
                    <p>Computer Science Specialist</p>
                    <p>Full Stack Developer</p>
                    <p>Hobbyist Game Developer</p>
                </div>
                <button id="learn-more">Learn More</button>
            </div>
            {/* <Skills /> */}
        </div>
    )
}