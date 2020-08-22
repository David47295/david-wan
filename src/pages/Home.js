import React from 'react';
import Skills from '../components/home/Skills'

import '../style/Home.css'

export default function Home() {
    return (
        <div id="home">
            <div class="home-banner">
                <div class="banner-content">
                    <h1>David Wan</h1>
                    <hr />
                    <div class="self-descrip">
                        <p>Software Development</p>
                        <p>Computer Science Specialist</p>
                        <p>Information Systems</p>
                    </div>
                </div>
            </div>
            <Skills />
        </div>
    )
}