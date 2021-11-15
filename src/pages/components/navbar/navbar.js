import React from "react";
import './navbar.scss';

const NavBar = () => {
    return (
        <div className="navbar flex">
            <div>
                <h6 id="logo">BN</h6>
            </div>
            <nav>
                <ul className="mainNav flex">
                    {/* <i class="fas fa-bars" id="menuIcon"></i> */}
                    <li id="aboutMe"><a href="#about">About Me</a></li>
                    <li id="skills"><a href="#skill">Skills</a></li>
                    <li id="projects"><a href="projects.html">My Projects</a></li>
                    <li id="contact" onclick="openForm()">Contact</li>
                </ul>
            </nav>
        </div>
    )
};

export default NavBar;