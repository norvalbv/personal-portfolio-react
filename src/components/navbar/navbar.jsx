import "./navbar.scss";
import pdfCV from "../../files/other/benjamin-norval-cv.pdf";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <nav>
        <div className="mainNav">
          <ul>
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a href="#my-work">My Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a href={pdfCV} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <div className="icon" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          <div className={"hamburger-menu " + (menuOpen && "active")}>
            <ul>
              <li className="hamburger-item">
                <Link to="/">Home</Link>
              </li>
              <li className="hamburger-item">
                <a href="#about">About Me</a>
              </li>
              <li className="hamburger-item">
                <a href="#my-work">My Work</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className="hamburger-item">
                <a href={pdfCV} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
