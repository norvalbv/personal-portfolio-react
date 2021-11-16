import React from "react";
import AboutMe from "../components/about-me/about-me";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import Skills from "../components/skills/skills";

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <AboutMe />
            <Skills />
            <Footer />
        </div>
    )
}

export default HomePage;