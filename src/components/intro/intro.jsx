import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
import IntroChild from "./introchild.jsx";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useNavigate } from "react-router-dom";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      typeSpeed: 90,
      backSpeed: 60,
      backDelay: 1250,
      showCursor: true,
      strings: ["Full Stack developer", "Blockchain Enthusiast"],
    });
  }, []);

  let heading = "Hello,";
  let heading2 = "I am Benjamin";
  let classname = ["a", "b", "c", "d", "e", "f"];

  let navigate = useNavigate();
  setTimeout(() => {
    return navigate("/portfolio");
  }, 10000);

  return (
    <div className="intro">
      <IntroChild />
      <div className="text">
        <h1>
          {heading.split("").map((item, i) => (
            <span
              className={
                classname[Math.floor(Math.random() * classname.length)]
              }
              key={i}
            >
              {item}
            </span>
          ))}
          <br />
          {heading2.split("").map((item, i) => (
            <span
              className={
                classname[Math.floor(Math.random() * classname.length)]
              }
              key={i}
            >
              {item}
            </span>
          ))}
        </h1>
        <h2>
          A 22 year old
          <br />
          <span ref={textRef} id="typed"></span>
          <br />
          from the United Kingdom
        </h2>
      </div>
      <Link to="/portfolio">
        <div className="scroll-down">
          <p>Get to know me</p>
          <ArrowForwardIcon fontSize="small" id="arr-forward" />
        </div>
      </Link>
    </div>
  );
}
