import "./footer.scss";

const Footer = ({ opencontact }) => {
  return (
    <footer>
      <div className="top">
        <div className="left">
          <h4>Let's connect</h4>
          <ul>
            <li>
              <a
                href="https://github.com/norvalbv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li onClick={opencontact} id="contact-me">
              Contact me
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/benjamin-norval-a36ab01b1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linked In
              </a>
            </li>
          </ul>
        </div>
        <div className="right">
          <h4>My Performance</h4>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a
                href="https://www.frontendmentor.io/profile/norvalbv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Front End Mentor
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>Website designed and created by Benjamin Norval</p>
      <p className="email">benjinorval@gmail.com</p>
    </footer>
  );
};

export default Footer;
