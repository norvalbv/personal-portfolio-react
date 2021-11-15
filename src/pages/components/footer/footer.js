import React from "react";
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div class="left">
                <h4>Let's conntect</h4>
                <ul>
                    <li><a href="https://github.com/norvalbv/" target="_blank">GitHub</a></li>
                    <li onclick="openForm()" id="contact-me">Contact me</li>
                </ul>
            </div>
            <div class="right">
                <h4>Projects</h4>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skill">Skills</a></li>
                </ul>
            </div>
            <p>Website designed and created by Benjamin Norval</p>
        </footer>
    )
};

export default Footer;