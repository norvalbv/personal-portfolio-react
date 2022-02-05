import ipTracker from "../../files/images/ip-tracker-screenshot.png";
import timeTracker from "../../files/images/time-tracker-screenshot.png";
import personalPortfolio from "../../files/images/personal-portfolio-screenshot.png";
import interactiveCommentSection from "../../files/images/interactive-comment-section.png";
import ecommerce from "../../files/images/landingpage.png";
import html from "../../files/images/html.png";
import css from "../../files/images/css.png";
import sass from "../../files/images/4375465_logo_sass_icon.png";
import jsIcon from "../../files/images/javascript.png";
import reactIcon from "../../files/images/atoms-symbol.png";

export const Coding = () => {
  return (
    <div className="item-container">
      <div className="item">
        <div className="left">
          <h3>Personal Portfolio</h3>
          <p>
            This is my personal portfolio page where i have practiced and tried
            to used latest methods of building a web app.
          </p>
          <button>
            <a
              href="https://github.com/norvalbv/personal-portfolio-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </button>
        </div>
        <div className="right">
          <img src={personalPortfolio} alt="Personal Portfolio Screenshot" />
          <div className="icons">
            <p>Technologies used:</p>
            <img src={html} alt="HTML Icon" />
            <img src={sass} alt="Sass Icon" />
            <img src={jsIcon} alt="JS Icon" />
            <img src={reactIcon} alt="React Icon" />
          </div>
        </div>
      </div>

      <div className="item">
        <div className="left">
          <h3>IP Tracker</h3>
          <p>
            A IP tracking application that uses the implementation of two APIs
            (Leaflet.js and IPify) to make the application work.
          </p>
          <button>
            <a
              href="https://norvalbv.github.io/IP-Address-Tracker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Live Demo
            </a>
          </button>
          <button>
            <a
              href="https://github.com/norvalbv/IP-Address-Tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </button>
        </div>
        <div className="right">
          <img src={ipTracker} alt="IP Tracker Screenshot" />
          <div className="icons">
            <p>Technologies used:</p>
            <img src={html} alt="HTML Icon" />
            <img src={css} alt="Sass Icon" />
            <img src={jsIcon} alt="JS Icon" />
          </div>
        </div>
      </div>

      <div className="item">
        <div className="left">
          <h3>Time Tracker</h3>
          <p>
            This is a project that reads a JSON database asynchronously and
            renders out informations based on your activities
          </p>
          <button>
            <a
              href="https://norvalbv.github.io/time-tracker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Live Demo
            </a>
          </button>
          <button>
            <a
              href="https://github.com/norvalbv/time-tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </button>
        </div>
        <div className="right">
          <img src={timeTracker} alt="Time Tracker Screenshot" />
          <div className="icons">
            <p>Technologies used:</p>
            <img src={html} alt="HTML Icon" />
            <img src={sass} alt="Sass Icon" />
            <img src={jsIcon} alt="JS Icon" />
          </div>
        </div>
      </div>

      <div className="item">
        <div className="left">
          <h3>E-Commerce site</h3>
          <p>An ongoing e-commerce project built with React and MUI.</p>
          <button>
            <a
              href="https://benjamin-ecommerce-demo.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Live Demo
            </a>
          </button>
          <button>
            <a
              href="https://github.com/norvalbv/ecommerce"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </button>
        </div>
        <div className="right">
          <img src={ecommerce} alt="Time Tracker Screenshot" />
          <div className="icons">
            <p>Technologies used:</p>
            <img src={html} alt="HTML Icon" />
            <img src={sass} alt="Sass Icon" />
            <img src={jsIcon} alt="JS Icon" />
            <img src={reactIcon} alt="React Icon" />
          </div>
        </div>
      </div>

      <div className="item">
        <div className="left">
          <h3>Interactive comment section</h3>
          <p>An interactive comment section built with React</p>
          <button>
            <a
              href="https://github.com/norvalbv/interactive-comment-section"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </button>
        </div>
        <div className="right">
          <img
            src={interactiveCommentSection}
            alt="Interactive Comment Section screenshot"
          />
          <div className="icons">
            <p>Technologies used:</p>
            <img src={html} alt="HTML Icon" />
            <img src={sass} alt="Sass Icon" />
            <img src={jsIcon} alt="JS Icon" />
            <img src={reactIcon} alt="React Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
