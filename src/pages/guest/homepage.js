import React from "react";
// import AboutMe from "../components/about-me/about-me";
// import ContactMe from "../components/contact-me/contact-me";
// import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import Portfolio from "../components/portfolio/portfolio";
import SkillsUpdate from "../components/skills-update/skills-update";
import './homepage.scss';

const HomePage = () => {
    return (
        <div className="app">
            <NavBar />
            <div className="sections">
                {/* <AboutMe /> */}
                <Portfolio />
                <SkillsUpdate />
                {/* <ContactMe />
                <Footer /> */}
            </div>
        </div>
    )
}

export default HomePage;