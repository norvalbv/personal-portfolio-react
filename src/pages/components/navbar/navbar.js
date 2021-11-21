import React from "react";
import './navbar.scss';
import pdfCV from '../../../files/benjamin-cv.pdf';
// import MenuIcon from '@mui/icons-material/Menu';

const NavBar = ({ menuOpen, setMenuOpen }) => {
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
                        <li className="nav-item"><a href="#my-work">My Work</a></li>
                        <li className="nav-item"><a href="#skills">Skills</a></li>
                        <li className="nav-item" onclick="openForm()">Contact</li>
                        <li className="nav-item"><a href={pdfCV} target="_blank">Download CV</a></li>
                    </ul>
                </div>
                <div className="hamburger">
                    <div className="icon" onClick={() => setMenuOpen(!menuOpen)}>
                        {/* <MenuIcon /> */}
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    <div className={"hamburger-menu " + (menuOpen && "active")}>
                        <ul>
                            <li className="hamburger-item"><a href="#">Home</a></li>
                            <li className="hamburger-item"><a href="#about">About Me</a></li>
                            <li className="hamburger-item"><a href="#my-work">My Work</a></li>
                            <li className="hamburger-item"><a href="#skills">Skills</a></li>
                            <li className="hamburger-item" onclick="openForm()">Contact</li>
                            <li className="hamburger-item"><a href={pdfCV} target="_blank">Download CV</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;