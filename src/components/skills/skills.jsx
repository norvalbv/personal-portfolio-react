import "./skills.scss";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "Sass",
    "React",
    "Redux",
    "Node",
    "Express",
    "Sql",
    "Git",
    "GitHub",
  ];

  return (
    <div className="skills">
      <div className="skills-text">
        <h2>My skills</h2>
        <p className="more-to-come">
          Since my learning journey began I have currently learned the PERN
          stack. I am expanding my skills every day and am currently learning
          TailwindCSS, JEST and my continued learning on all my current skills.
        </p>
      </div>
      <div className="drop-container">
        {skills.map((item) => (
          <div key={Math.random()}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
