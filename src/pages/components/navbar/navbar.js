import React from "react";
import './navbar.scss';

const NavBar = () => {
    return (
        <div className="navbar">
            <div>
                <h6 id="logo">BN</h6>
            </div>
            <nav>
                <ul className="mainNav flex">
                    <i className="fas fa-bars burger-menu-icon" id="menuIcon"></i>
                    <li className="nav-item"><a href="#about">About Me</a></li>
                    <li className="nav-item"><a href="#skill">Skills</a></li>
                    <li className="nav-item"><a href="projects.html">My Projects</a></li>
                    <li className="nav-item" onclick="openForm()">Contact</li>
                </ul>
                {/* <div className="burger-menu flex">
                    <li className="burger-item"><a href="#about">About Me</a></li>
                    <li className="burger-item"><a href="#skill">Skills</a></li>
                    <li className="burger-item"><a href="projects.html">My Projects</a></li>
                    <li className="burger-item" onclick="openForm()">Contact</li>
                </div> */}
            </nav>
        </div>
    )
};

export default NavBar;