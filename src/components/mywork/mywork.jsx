import { useState } from "react";
import "./mywork.scss";
import { Coding } from "./data";

export default function MyWork() {

  const [data, setData] = useState(Coding);

  return (
    <div className="myWork">
      <h2>My Work</h2>
      {data}
    </div>
  );
}
