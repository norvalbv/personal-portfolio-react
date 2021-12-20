import React from "react";
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="flex top">
                <div class="left">
                    <h4>Let's connect</h4>
                    <ul>
                        <li><a href="https://github.com/norvalbv/" target="_blank">GitHub</a></li>
                        <li onclick="openForm()" id="contact-me">Contact me</li>
                        <li><a href="https://www.linkedin.com/in/benjamin-norval-a36ab01b1/" target="_blank">Linked In</a></li>
                        <li><a href="https://stackoverflow.com/users/17442963/benjamin-norval" target="_blank">Stack overflow</a></li>
                    </ul>
                </div>
                <div class="right">
                    <h4>My Performance</h4>
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#skill">Skills</a></li>
                        <li><a href="https://www.frontendmentor.io/profile/norvalbv" target="_blank">Front End Mentor</a></li>
                    </ul>
                </div>
            </div>
            <p>Website designed and created by Benjamin Norval</p>
            <p class="email">benjinorval@gmail.com</p>
        </footer>
    )
};

export default Footer;