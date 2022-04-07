import { useState } from "react";
import Intro from "../components/intro/intro";
import Loading from "./loading/loading";

export const Landing = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      {loading && <Loading />}
      {!loading && <Intro />}
    </>
  );
};
