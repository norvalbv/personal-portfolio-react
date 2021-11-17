import React from 'react';
import './portfolio.scss';

export default function Portfolio() {
    return (
        <div className="portfolio flex">
            <h2>Portfolio</h2>
            <ul className="work-type">
                <li className="active">Work Experience</li>
                <li>Coding Projects</li>
            </ul>
            <div className="container">
                <div className="item1">
                    <h3>Space Project</h3>
                </div>
                <div className="item2">
                    <h3>Personal Portfolio</h3>
                </div>
                <div className="item3">
                    <h3>Time Tracker App</h3>
                </div>
                <div className="item4">
                    <h3>Receipe Search App</h3>
                </div>
                <div className="item5">
                    <h3>Dad Joke Generator</h3>
                </div>
            </div>
        </div>
    )
}
