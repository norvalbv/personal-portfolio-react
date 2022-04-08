import "./about-me.scss";
import profilePhoto from "../../files/images/profile-photo.png";
// import pdfCV from "../../files/other/benjamin-cv.pdf";

const AboutMe = () => {
  return (
    <div id="about">
      <div className="about-image">
        <img
          src={profilePhoto}
          alt="Headshot of Benjamin Norval"
          id="overlayImage"
        />
        <img src={profilePhoto} alt="" id="underlayImage" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I am a Full Stack developer from Wales, United Kingdom spcialising in
          the PERN stack.
          <br />
          <br />
          After obtaining my First Class Honours in my business degree at The
          University of Reading I picked up a liking for programming and have
          been coding ever since.
          <br />
          <br />I would love for you to check out my projects and even reach
          out!
        </p>
        {/* <button> */}
          {/* <a href={pdfCV} target="_blank" rel="noopener noreferrer">
            Download my CV
          </a> */}
        {/* </button> */}
      </div>
    </div>
  );
};

export default AboutMe;
