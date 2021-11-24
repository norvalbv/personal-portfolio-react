import React from "react";
import './contact-me.scss';

const ContactMe = ({ contactOpen, SetContactOpen }) => {
    return (
        <div className="contact-me flex">
            <p>If you would like to get into contact with me, you can do so at any point. Feel free to view my past work</p>
            <div>
                <button className="primary-btn1" onClick={() => SetContactOpen(!contactOpen)}>Contact Me</button>
                <button className="primary-btn2"><a href="#my-work">View my work</a></button>
            </div>
        </div>
    )
}

export default ContactMe;