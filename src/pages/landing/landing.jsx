import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LandingChild from "../../components/landingchild";
import "./landing.scss";

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      return navigate("/portfolio");
    }, 2750);
  }, []);
  return (
    <>
      <LandingChild />
      <h2 id="who">Who am I?</h2>
    </>
  );
};

export default LandingPage;
