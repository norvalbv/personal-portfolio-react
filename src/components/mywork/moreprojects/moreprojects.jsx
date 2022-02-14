import "./moreprojects.scss";

export default function MoreProjects() {
  return (
    <div className="more-projects">
      <h2 id="more-projects-main-title">View more of my work</h2>
      <div className="more-projects-inner-container">
        <div className="project">
          <h2 className="project-title">IP Tracker App</h2>
          <p className="project-desc">
            A IP tracking application that uses the implementation of two APIs
            (Leaflet.js and IPify) to make the application work.
          </p>
          <a
            href="https://github.com/norvalbv/IP-Address-Tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="learn-more-button"
          >
            Learn more
          </a>
          <ul className="icons">
            <li>HTML/CSS</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>API</li>
          </ul>
        </div>
        <div className="project">
          <h2 className="project-title">Personal Portfolio</h2>
          <p className="project-desc">
            This is my personal portfolio page where i have practiced and tried
            to used latest methods of building a web app.
          </p>
          <a
            href="https://github.com/norvalbv/personal-portfolio-react"
            target="_blank"
            rel="noopener noreferrer"
            className="learn-more-button"
          >
            Learn more
          </a>
          <ul className="icons">
            <li>HTML/CSS</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="project">
          <h2 className="project-title">E-commerce Project</h2>
          <p className="project-desc">
            An ongoing e-commerce project built with React and MUI.
          </p>
          <a
            href="https://github.com/norvalbv/ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            className="learn-more-button"
          >
            Learn more
          </a>
          <ul className="icons">
            <li>HTML/CSS</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>API</li>
          </ul>
        </div>
      </div>
      <button className="learn-more-button">
        <a
          href="https://github.com/norvalbv"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "0.9rem" }}
        >
          View all of my projects on my GitHub
        </a>
      </button>
    </div>
  );
}
