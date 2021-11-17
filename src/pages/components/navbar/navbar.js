import React from "react";
import './navbar.scss';
import MenuIcon from '@mui/icons-material/Menu';

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
                <div className="burger-menu">
                    <MenuIcon />
                </div>
            </nav>
        </div>
    )
};

export default NavBar;