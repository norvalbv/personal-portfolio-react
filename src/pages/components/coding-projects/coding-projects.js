import React from "react";
import './coding-projects.scss';
import Space from '../../../files/cyrus-clothing-cover.jpg'

const CodingProjects = () => {
    return (
        <div className="projects">
            <div className="codingProjects">
                <h2>Coding Projects</h2>
                <img src={Space} alt="Space Tourism project screenshot" />
                <div className="spaceTourismText">
                    <h3>Space tourism multi-page website</h3>
                    <p>This is my personal portfolio page where i have practiced and tried to used latest methods of building a web app.</p>
                    <a href="#" target="_blank">View live demo</a>
                </div>
                <br />
                <p>I also codes more side-projects. You can view these on my GitHub</p>
                <a href="https://github.com/norvalbv/" target="_blank">View my GitHub</a>
            </div>
        </div>
    )
}

export default CodingProjects;