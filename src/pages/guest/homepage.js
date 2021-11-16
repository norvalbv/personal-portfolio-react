import React from "react";
import AboutMe from "../components/about-me/about-me";
import ContactMe from "../components/contact-me/contact-me";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import Skills from "../components/skills/skills";

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <AboutMe />
            <Skills />
            <ContactMe />
            <Footer />
        </div>
    )
}

export default HomePage;