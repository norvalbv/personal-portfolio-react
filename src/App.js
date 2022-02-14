import React, { useState } from "react";

import Intro from "./components/intro/intro.jsx";
import NavBar from "./components/navbar/navbar.jsx";
import AboutMe from "./components/about-me/about-me.jsx";
import ContactMe from "./components/contact-me/contact-me.jsx";
import Skills from "./components/skills/skills.jsx";
import MyWork from "./components/mywork/featuredprojects/mywork.jsx";
import MoreProjects from "./components/mywork/moreprojects/moreprojects.jsx";
import Footer from "./components/footer/footer.jsx";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openhamburger = () => setMenuOpen(!menuOpen);

  const [contactOpen, setContactOpen] = useState(false);
  const opencontact = () => setContactOpen(!contactOpen);

  return (
    <div className="app">
      <Intro />
      <NavBar
        menuOpen={menuOpen}
        openmenu={openhamburger}
        contactOpen={contactOpen}
        opencontact={opencontact}
      />
      <AboutMe />
      <MyWork />
      <MoreProjects />
      <Skills />
      <ContactMe opencontact={opencontact} />
      <Footer openContant={opencontact}/>
    </div>
  );
};

export default HomePage;
