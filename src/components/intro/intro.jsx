import React, { useState, useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
import IntroChild from "./introchild.jsx";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// const reactStringReplace = require("react-string-replace");

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      typeSpeed: 90,
      backSpeed: 60,
      backDelay: 1250,
      showCursor: true,
      strings: [
        "Front end developer",
        "Aspiring full stack developer",
        "Entrepreneur",
        "Blockchain enthusiast",
      ],
    });
  }, []);

  // const headingRef = useRef();

  // const random = () => {
  //   let heading = headingRef.current;
  //   let classname = ["a", "b", "c", "d", "e", "f"];
  //   const split = heading.innerHTML.split("");
  //   console.log(split);
  //   console.log(heading.innerHTML);

  //   let replace = [];
  //   for (let i = 0; i < split.length; i++) {
  //     //   reactStringReplace(heading.innerHTML, split[i], (match, i) => {
  //     replace.push(
  //       heading.innerHTML.replace(
  //         split[0],
  //         <span key={i} className={classname[Math.floor(Math.random() * 5)]}>
  //           {split[0]}
  //         </span>

  //         //       <span key={i} className={classname[Math.floor(Math.random() * 5)]}>
  //         //       { match }
  //         //     </span>
  //         //     )}
  //       )
  //     );
  //   }
  //   console.log(replace);
  //   const newStr = replace.join("");
  //   heading.innerHTML = newStr;
  // };

  return (
    <div className="intro">
      <IntroChild />
      <div className="text">
        {/* <h1
          // onMouseEnter={random}
          //  ref={headingRef}
        >
          Hello.
        </h1> */}
        <h1
          className="heading"
          //  onMouseMove={() => random()} ref={headingRef}
        >
          Hello. <br />I am Benjamin
        </h1>
        <h2>
          A 22 year old
          <br />
          <span ref={textRef} id="typed"></span>
          <br />
          from the United Kingdom
        </h2>
      </div>

      <div className="scroll-down">
        <p>Scroll Down</p>
        <ArrowForwardIcon fontSize="small" id="arr-forward" />
        <ArrowDownwardIcon fontSize="small" id="arr-down" />
      </div>
    </div>
  );
}
