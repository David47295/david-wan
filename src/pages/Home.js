import React from 'react';
import {Link} from 'react-router-dom';

import '../style/Home.css'

class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <div className="content-container">
                    <div className="title">David Wan</div>
                    <div className="description">
                        <p>Full Stack Developer | 4th year Computer Science Specialist @ the University of Toronto</p>
                    </div>
                    <Link to="/aboutme">
                        <button id="learn-more" className="button">Learn More</button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default Home;