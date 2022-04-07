import "./intro.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Intro = () => {
  let header = "Welcome To My Portfolio";
  let classname = ["a", "b", "c", "d", "e", "f"];
  return (
    <div id="welcome">
      {header.split("").map((item, i) => (
        <span
          className={[
            classname[Math.floor(Math.random() * classname.length)],
            "intro-title",
          ].join(" ")}
          key={i}
        >
          {item}
        </span>
      ))}
      <div className="scroll">
        <p>Get to know me</p>
        <ArrowDownwardIcon fontSize="small" id="arr-forward" />
      </div>
    </div>
  );
};
