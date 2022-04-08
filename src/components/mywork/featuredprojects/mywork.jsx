import "./mywork.scss";
import rockPaperScissors from "../../../files/images/rock-paper-scissors.png";
import interactiveCommentSection from "../../../files/images/todo-application.png";
import googleClone from "../../../files/images/google-clone.png";

export default function MyWork() {
  return (
    <>
      <h2 id="my-work">My Work</h2>
      <div className="item-container">
        <div className="item">
          <div className="flex-rightside-portfolio">
            <img
              src={rockPaperScissors}
              alt="Rock Paper Scissors"
              className="project-screenshot"
            />
          </div>
          <div className="flex-leftside-portfolio second">
            <h3 className="featured-project">Featured Project</h3>
            <h4 className="project-title">Full Stack E-commerce Project</h4>
            <div className="project-desc-wrap">
              <p className="project-desc">
                A Full Stack e-commerce web app built with the PERN stack. There
                are different categories, products and more making the web app
                as releastic as possible.
              </p>
              <div className="more-info">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more-info-button"
                >
                  Check Live Demo
                </a>
                <a
                  href="https://github.com/norvalbv/ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more-info-button"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="icons">
              <ul>
                <li>HTML/CSS</li>
                <li>SASS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node</li>
                <li>Express JS</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="flex-leftside-portfolio first">
            <h3 className="featured-project">Featured Project</h3>
            <h4 className="project-title">Google Clone</h4>
            <div className="project-desc-wrap" id="second-project">
              <p>
                A Google Clone built with React hooks and functional components.
                The project uses an online API from RapidAPIs for receiving the
                data.
              </p>
              <div className="more-info">
                <a
                  href="https://github.com/norvalbv/google-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more-info-button"
                >
                  Learn More
                </a>
                <a
                  href="https://google-clone-by-benji.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more-info-button"
                >
                  View Live Demo
                </a>
              </div>
            </div>
            <div className="icons">
              <ul>
                <li>HTML/CSS</li>
                <li>SASS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>API</li>
              </ul>
            </div>
          </div>
          <div className="flex-rightside-portfolio">
            <img
              src={googleClone}
              alt="Interactive Comment Section screenshot"
              className="project-screenshot"
            />
          </div>
        </div>
        <div className="item">
          <div className="flex-rightside-portfolio">
            <img
              src={interactiveCommentSection}
              alt="Interactive Comment Section screenshot"
              className="project-screenshot"
            />
          </div>
          <div className="flex-leftside-portfolio second">
            <h3 className="featured-project">Featured Project</h3>
            <h4 className="project-title">Full Stack Todo app</h4>
            <div className="project-desc-wrap">
              <p>
                A full stack to-do application using the PERN stack. This
                application has recently been updated from client-side only to
                now be full stack.
              </p>
              <div>
                <a
                  href="https://github.com/norvalbv/todo-app-pern-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more-info-button"
                >
                  Learn More
                </a>
                <a
                  href="https://todo-application-using-pern.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more-info-button"
                >
                  View Live Demo
                </a>
              </div>
            </div>
            <div className="icons">
              <ul>
                <li>HTML/CSS</li>
                <li>SASS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Express</li>
                <li>Node</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
