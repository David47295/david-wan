import React from 'react';
import '../style/Resume.css'

export default function Resume() {
    return (
        <div id="resume">
            <b class="main-header">Work Experience</b>
            <div class="work-experience">
                <b class="role">Full Stack Developer (Cloud)</b>
                <p class="location">IBM Canada – Markham, ON (May 2019 – August 2020)</p>
                <ul>
                    <li>Helped migrate older Operations Dashboard over to newer, micro-services and Cognos based architecture</li>
                    <li>Developed new dashboard displaying breakdowns of various support KPIs that are tracked by numerous product leaders, using Vue JS, Node JS, and PostgreSQL</li>
                    <li>Rapidly learned and utilized Cognos Analytics to develop several required dashboards within the team’s tight schedule</li>
                    <li>Wrote styling guide for DashboardNEXT to ensure harmonized design across all tabs within the dashboard</li>
                </ul>
            </div>
        </div>
    )
}