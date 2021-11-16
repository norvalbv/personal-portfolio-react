import React from "react";
import './work-experience.scss';
import Cyrus from '../../../files/cyrus-clothing-cover.jpg'

const WorkExperience = () => {
    return (
        <div className="projects">
            <hr id="split"/>
            <div className="workExperience">
                <h2>Work Experience</h2>
                <img src={Cyrus} alt="Cyrus Clothing work experience cover" />
                <h3>Director and owner: Cyrus Clothing</h3>
                <p>I sole-founded my first e-commerce businsess in 2018 and later sold it in 2021.</p>
                <a href="www.cyrusclothing.com" target="_blank">www.cyrusclothing.com</a>
            </div>
        </div>
    )
}

export default WorkExperience;