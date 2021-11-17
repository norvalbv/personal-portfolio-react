import React from "react";
import './navbar.scss';
// import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    return (
        <div className="navbar">
            <div>
                <h6 id="logo">BN</h6>
            </div>
            <nav>
                <div className="mainNav">
                    <ul className="flex">
                        <li className="nav-item"><a href="#">Home</a></li>
                        <li className="nav-item"><a href="#about">About Me</a></li>
                        <li className="nav-item"><a href="#skill">Skills</a></li>
                        <li className="nav-item"><a href="projects.html">My Projects</a></li>
                        <li className="nav-item" onclick="openForm()">Contact</li>
                    </ul>
                </div>
                <div className="hamburger">
                    <div className="icon">
                        {/* <MenuIcon /> */}
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    <div className="hamburger-menu active">
                        <ul>
                            <li className="hamburger-item"><a href="#">Home</a></li>
                            <li className="hamburger-item"><a href="#about">About Me</a></li>
                            <li className="hamburger-item"><a href="#skill">Skills</a></li>
                            <li className="hamburger-item"><a href="projects.html">My Projects</a></li>
                            <li className="hamburger-item" onclick="openForm()">Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;