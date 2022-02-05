import "./skills.scss";
import html from "../../files/images/html.png";
import css from "../../files/images/css.png";
import sass from "../../files/images/4375465_logo_sass_icon.png";
import jsIcon from "../../files/images/javascript.png";
import reactIcon from "../../files/images/atoms-symbol.png";
import git from "../../files/images/git.png";
import github from "../../files/images/github.png";
import figma from "../../files/images/figma.png";
import bootstrap from "../../files/images/bootstrap.png";
import redux from "../../files/images/redux.png";

const Skills = () => {
  const imgSources = [
    html,
    css,
    sass,
    jsIcon,
    reactIcon,
    git,
    github,
    figma,
    bootstrap,
    redux,
  ];

  const itemList = [
    "HTML",
    "CSS",
    "Sass",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "Figma",
    "Bootstrap",
    "Redux",
  ];
  return (
    <div className="skills" id="skills">
      <h2>My skills</h2>
      <div className="skills-icons">
        <ul>
          {itemList.map((item) => (
            <li key={imgSources.indexOf(item)}>
              <img
                src={imgSources[itemList.indexOf(item)]}
                alt={`${item} Icon`}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="more-to-come">
          More to come...
          <br />
          <br />
          Including backend technologies :)
        </p>
      </div>
    </div>

    // <div className="skills" id="skills">
    //   <h2>My skills</h2>
    //   <div className="flex-container">
    //     <div className="frontend">
    //       <h3 className="development-title">Front end</h3>
    //       <ul>
    //         <li>HTML</li>
    //         <li>CSS</li>
    //         <li>Sass/Scss</li>
    //         <li>Bootstrap</li>
    //         <li>React</li>
    //         <li>Redix</li>
    //       </ul>
    //     </div>
    //     <div className="backend">
    //       <h3 className="development-title">Back end</h3>
    //       <ul>
    //         <li>Node JS</li>
    //         <li>Express</li>
    //         <li>More being learnt</li>
    //       </ul>
    //     </div>
    //     <div className="other">
    //       <h3 className="development-title">Other</h3>
    //       <ul>
    //         <li>Jest</li>
    //         <li>Git</li>
    //         <li>GitHub</li>
    //         <li>Figma</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Skills;
