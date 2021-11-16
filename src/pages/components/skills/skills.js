import React from "react";
import './skills.scss';
import html from '../../../files/html.png'
import css from '../../../files/css.png'
import sass from '../../../files/4375465_logo_sass_icon.png'
import jsIcon from '../../../files/javascript.png'
import reactIcon from '../../../files/atoms-symbol.png'


const Skills = () => {
    return (
        <div className="skills" id="skill">
        <h2>My skills</h2>
        <div className="skillsIcons">
            <ul>
                <li><img src={html} alt="HTML Icon" /><span>HTML5</span></li>
                <li><img src={css} alt="CSS Icon" /><span>CSS3</span></li>
                <li><img src={sass} alt="Sass Icon" id="sass" /><span>Sass</span></li>
                <li><img src={jsIcon} alt="JavaScript Icon" /><span>JavaScript</span></li>
                <li><img src={reactIcon} alt="React Icon" /><span>React</span></li>
            </ul>
        </div>
        <p>More to come...</p>
    </div>
    )
}

export default Skills;