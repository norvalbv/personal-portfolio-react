import "./about-me.scss";
import profilePhoto from "../../files/images/profile-photo.png";
import pdfCV from "../../files/other/benjamin-cv.pdf";

const AboutMe = () => {
  return (
    <div className="aboutMe" id="about">
      <div className="aboutImage">
        <img
          src={profilePhoto}
          alt="Headshot of Benjamin Norval"
          id="overlayImage"
          className="aboutImg"
        />
        <img
          src={profilePhoto}
          alt=""
          id="underlayImage"
          className="aboutImg"
        />
      </div>
      <div className="aboutText">
        <h2>About Me</h2>
        <p>
          I am a junior front end developer from Wales, United Kingdom.
          <br />
          <br />
          After obtaining my First Class Honours in my business degree at The
          University of Reading I picked up a liking for programming and have
          been coding ever since!
          <br />
          <br />I am currently learning full stack development
        </p>
        <button>
          <a href={pdfCV} target="_blank" rel="noopener noreferrer">
            Download my CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
