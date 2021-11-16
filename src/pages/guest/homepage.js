import React from "react";
import AboutMe from "../components/about-me/about-me";
import CodingProjects from "../components/coding-projects/coding-projects";
import ContactMe from "../components/contact-me/contact-me";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import Skills from "../components/skills/skills";
import WorkExperience from "../components/work-experience/work-experience";

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <AboutMe />
            <WorkExperience />
            <CodingProjects />
            <Skills />
            <ContactMe />
            <Footer />
        </div>
    )
}

export default HomePage;