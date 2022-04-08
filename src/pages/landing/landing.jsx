import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IntroChild from "../../components/landing/landingchild";
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
      <IntroChild />
      <h2 id="who">Who am I?</h2>
    </>
  );
};

export default LandingPage;
