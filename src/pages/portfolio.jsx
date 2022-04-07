import AboutMe from "../components/about-me/about-me";
import ContactMe from "../components/contact-me/contact-me";
import Footer from "../components/footer/footer";
import MyWork from "../components/mywork/featuredprojects/mywork";
import MoreProjects from "../components/mywork/moreprojects/moreprojects";
import NavBar from "../components/navbar/navbar";
import Skills from "../components/skills/skills";
import { Test } from "../components/test/test";

export const Portfolio = () => {
  return (
    <>
      <NavBar />
      <Test />
      <AboutMe />
      <MyWork />
      <MoreProjects />
      <Skills />
      <ContactMe />
      <Footer />
    </>
  );
};
