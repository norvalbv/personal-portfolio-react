import React, { useState } from "react";
import AboutMe from "../components/about-me/about-me";
// import ContactMe from "../components/contact-me/contact-me";
// import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import Intro from "../components/intro/intro";
import Portfolio from "../components/portfolio/portfolio";
import SkillsUpdate from "../components/skills-update/skills-update";
import './homepage.scss';

const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="app">
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                <Intro />
                <AboutMe />
                <Portfolio />
                <SkillsUpdate />
                {/* <ContactMe />
                <Footer /> */}
            </div>
        </div>
    )
}

export default HomePage;