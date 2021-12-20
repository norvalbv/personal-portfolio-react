import React from "react";
import './navbar.scss';
import pdfCV from '../../../files/benjamin-cv.pdf';
import ContactPopUp from "../contact-popup/contact-popup.jsx";

const NavBar = ({openmenu, menuOpen, opencontact, contactOpen}) => {
    return (
        <div className="navbar">
            <div>
                <h6 id="logo">BN</h6>
            </div>
            <nav>
                <div className="mainNav">
                    <ul className="flex">
                        <li className="nav-item"><a href="/">Home</a></li>
                        <li className="nav-item"><a href="#about">About Me</a></li>
                        <li className="nav-item"><a href="#my-work">My Work</a></li>
                        {/* <li className="nav-item"><a href="#skills">Skills</a></li> */}
                        <li onClick={opencontact}>Contact</li>
                        <li className="nav-item"><a href={pdfCV} target="_blank">Download CV</a></li>
                    </ul>
                </div>
                <div className="hamburger">
                    <div className="icon" onClick={openmenu}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    <div className={"hamburger-menu " + (menuOpen && "active")}>
                        <ul>
                            <li className="hamburger-item"><a href="/">Home</a></li>
                            <li className="hamburger-item"><a href="#about">About Me</a></li>
                            <li className="hamburger-item"><a href="#my-work">My Work</a></li>
                            {/* <li className="hamburger-item"><a href="#skills">Skills</a></li> */}
                            <li onClick={opencontact}>Contact</li>
                            <li className="hamburger-item"><a href={pdfCV} target="_blank">Download CV</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {contactOpen ? <ContactPopUp className="nav-item" opencontact={opencontact} contactOpen={contactOpen} /> : null}
        </div>
    )
};

export default NavBar;