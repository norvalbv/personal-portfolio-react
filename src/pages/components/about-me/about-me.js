import React from "react";
import './about-me.scss';
import profilePhoto from '../../../files/profile-photo.png'

const AboutMe = () => {
    return (
        <div className="aboutMe" id="about">
            <div className="aboutImage">
                <img src={profilePhoto} alt="Image of me" id="overlayImage" className="aboutImg" />
                <img src={profilePhoto} alt="" id="underlayImage" className="aboutImg" />
            </div>
            <div className="aboutText">
                <h2>About Me</h2>
                <p>I have a passion for business, computer science, programming and surrounding subjects, enforced by the achievement of first-class honours in (BA) Entrepreneurship and Business Management degree.
                <br />
                <br />
                I sole founded my first company within the apparel niche of 2018 enabling real-time learning with key skills, such as sales, business development and e-commerce; later selling in 2021.
                <br />
                <br />
                I am a driven, confident, and quick learner looking to utilise my skills and passion within the business sector.</p>
            </div>
        </div>
    );
}

export default AboutMe;