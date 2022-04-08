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
          <h2 className="project-title">Rock Paper Scissors Game</h2>
          <p className="project-desc">
            A Rock Paper Scissors game built with React. The project build has
            tested my CSS animations and understanding and also understanding of
            managing complex states.
          </p>
          <a
            href="https://github.com/norvalbv/rock-paper-scissors"
            target="_blank"
            rel="noopener noreferrer"
            className="learn-more-button"
          >
            Learn More
          </a>
          <ul className="icons">
            <li>HTML/CSS</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className="project">
          <h2 className="project-title">Know Your Code</h2>
          <p className="project-desc">
            I am the team leader of an on-going full stack grouped project that
            outlines software questions and answers in simple ways. This project
            is in early stages but you're more than welcome to see our
            progression!
          </p>
          <a
            href="https://github.com/norvalbv/know-your-code"
            target="_blank"
            rel="noopener noreferrer"
            className="learn-more-button"
          >
            Learn More
          </a>
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
