import { useEffect, useState } from "react";
import "./mywork.scss";
import { Coding } from "./data";
// const data = require("./data2");
import data from "./data2";

export default function MyWork() {
  const [data, setData] = useState(Coding);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       // console.log(data[0]["Personal Portfolio"].Description);
  //       // for (let i = 0; i < data.length; i++) {
  //       //   console.log(data[i].)
  //       // }
  //       data.map((item) => {
  //         console.log(item.Title);
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   })();
  // }, []);

  return (
    <div className="my-work">
      <h2 id="work-heading">My Work</h2>
      <h3 className="featured-project-mobile">Featured Projects <span style={{fontStyle: "italic", textTransform: "capitalize", color: "lightgray"}}>(Click on the images)</span></h3>
      {data}
    </div>
  );
}
