import rockPaperScissors from "../../../files/images/rock-paper-scissors.png";
import interactiveCommentSection from "../../../files/images/todo-application.png";
import googleClone from "../../../files/images/google-clone.png";

export const Coding = () => {
  return (
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
          <h4 className="project-title">Rock Paper Scissors Game</h4>
          <div className="project-desc-wrap">
            <p className="project-desc">
              A Rock Paper Scissors game built with React and Redux. The project
              build has tested my CSS animations and understanding and also
              utilising Redux as a state management to manage complex states and
              passing props.
            </p>
            <div className="more-info">
              <button className="more-info-button">
                <a
                  href="https://norvalbv.github.io/time-tracker/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Live Demo
                </a>
              </button>
              <button className="more-info-button">
                <a
                  href="https://github.com/norvalbv/time-tracker"
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
      <div className="item">
        <div className="flex-leftside-portfolio first">
          <h3 className="featured-project">Featured Project</h3>
          <h4 className="project-title">Google Clone</h4>
          <div className="project-desc-wrap">
            <p>A Google Clone built with React hooks and functional components. The project uses an online API from RapidAPIs for receiving the data.</p>
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
              A to-do application built with React using functional components
              and React Hooks
            </p>
            <div className="more-info">
              <button className="more-info-button">
                <a
                  href="https://github.com/norvalbv/todo-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </button>
              <button className="more-info-button">
                <a
                  href="https://todo-application-demo.herokuapp.com/"
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
