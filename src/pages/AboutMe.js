import React from 'react';
import '../style/AboutMe.css';
import {Link} from 'react-router-dom';

export default function AboutMe() {
    return (
        <div id="about-me">
            <b className="title">Who am I?</b>
            <div id="about-me-content">
                <div class="about-me-section">
                    Hey there! Thanks for taking the time to learn more about me. 
                    My name is David Wan and I'm a 4th year Computer Science Student at the University of Toronto!
                </div>
                <div class="about-me-section">
                    I specialize in Web Development as a Full Stack Developer, and have tons of experience with various tools and frameworks.
                    Some examples include React JS, Vue JS, SCSS, CSS, Node JS, Express JS, and Sockets.
                    I also have plenty of experience working with various database technologies like PostgreSQL, MongoDB, and IBM DB2!
                </div>
                <div class="about-me-section">
                    On the side, I like to play video games as well as develop them in Unreal Engine 4! I also enjoy drawing digital art and baking!
                </div>
            </div>
            <Link to="/resume">
                <button>See Work experience</button>
            </Link>
        </div>
    )
}