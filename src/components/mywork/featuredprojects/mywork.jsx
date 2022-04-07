import "./mywork.scss";
import rockPaperScissors from "../../../files/images/rock-paper-scissors.png";
import interactiveCommentSection from "../../../files/images/todo-application.png";
import googleClone from "../../../files/images/google-clone.png";

export default function MyWork() {
  return (
    <div id="my-work">
      <h2 id="work-heading">My Work</h2>
      <h3 className="featured-project-mobile">Featured Projects</h3>
      <div className="item-container">
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
            <h4 className="project-title">Todo app</h4>
            <div className="project-desc-wrap">
              <p>
                A full stack to-do application using the PERN stack. This
                application has recently been updated from client-side only to
                now be full stack.
              </p>
              <div>
                <button className="more-info-button">
                  <a
                    href="https://github.com/norvalbv/todo-app-pern-stack"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </button>
                <button className="more-info-button">
                  <a
                    href="https://todo-application-using-pern.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Demo
                  </a>
                </button>
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
        <div className="item">
          <div className="flex-leftside-portfolio first">
            <h3 className="featured-project">Featured Project</h3>
            <h4 className="project-title">Google Clone</h4>
            <div className="project-desc-wrap">
              <p>
                A Google Clone built with React hooks and functional components.
                The project uses an online API from RapidAPIs for receiving the
                data.
              </p>
              <div className="more-info">
                <button className="more-info-button">
                  <a
                    href="https://github.com/norvalbv/google-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </button>
                <button className="more-info-button">
                  <a
                    href="https://google-clone-by-benji.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Demo
                  </a>
                </button>
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
              src={rockPaperScissors}
              alt="Rock Paper Scissors"
              className="project-screenshot"
            />
          </div>
          <div className="flex-leftside-portfolio second">
            <h3 className="featured-project">Featured Project</h3>
            <h4 className="project-title">Rock Paper Scissors Game</h4>
            <div className="project-desc-wrap">
              <p className="project-desc">
                A Rock Paper Scissors game built with React. The project build
                has tested my CSS animations and understanding and also
                understanding of managing complex states.
              </p>
              <div className="more-info">
                <button className="more-info-button">
                  <a
                    href="https://rock-paper-scissors-app-demo.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Live Demo
                  </a>
                </button>
                <button className="more-info-button">
                  <a
                    href="https://github.com/norvalbv/rock-paper-scissors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </button>
              </div>
            </div>
            <div className="icons">
              <ul>
                <li>HTML/CSS</li>
                <li>SASS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
