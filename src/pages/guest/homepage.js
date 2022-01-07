import React, { useState } from "react";
import AboutMe from "../components/about-me/about-me";
import ContactMe from "../components/contact-me/contact-me";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import Intro from "../components/intro/intro";
import Skills from "../components/skills/skills";
import Portfolio from "../components/portfolio/portfolio";
import MyWork from "../components/mywork/mywork";


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
            <Skills />
            <ContactMe opencontact={opencontact}/>
            <Footer />
        </div>
    )
}

export default HomePage;