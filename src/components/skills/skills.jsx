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
            <li key={itemList.indexOf(item)}>
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
          More to come... (currently learning Jest, Node and Express)
          <br />
          <br />
          Including more backend technologies :)
        </p>
      </div>
    </div>
  );
};

export default Skills;
