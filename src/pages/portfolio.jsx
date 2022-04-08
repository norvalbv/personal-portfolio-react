import AboutMe from "../components/about-me/about-me";
import ContactMe from "../components/contact-me/contact-me";
import Footer from "../components/footer/footer";
import Landing from "../components/landing/landing";
import MyWork from "../components/mywork/featuredprojects/mywork";
import MoreProjects from "../components/mywork/moreprojects/moreprojects";
import NavBar from "../components/navbar/navbar";
import Skills from "../components/skills/skills";

const PortfolioPage = () => {
  return (
    <div className="portfolio">
      <NavBar />
      <Landing />
      <AboutMe />
      <MyWork />
      <MoreProjects />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
