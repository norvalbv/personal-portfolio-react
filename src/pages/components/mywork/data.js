import cyrusImg from '../../../files/cyrus-clothing-landscape.jpg';
import html from '../../../files/html.png';
import css from '../../../files/css.png';
import sass from '../../../files/4375465_logo_sass_icon.png';
import jsIcon from '../../../files/javascript.png';
import reactIcon from '../../../files/atoms-symbol.png';
import git from '../../../files/git.png';
import github from '../../../files/github.png';
import figma from '../../../files/figma.png';
import bootstrap from '../../../files/bootstrap.png';


export const Coding = () => {
    return (
        <div className="item-container">
            <div className="item">
                <div className="left">
                    <h3>Personal Portfolio</h3>
                    <p>This is my personal portfolio page where i have practiced and tried to used latest methods of building a web app.</p>
                    <button>Check Live Demo</button>
                    <button>Source Code</button>
                </div>
                <div className="right">
                    <img src={cyrusImg} alt="#" />
                    <div className="icons">
                        <p>Technologies used:</p>
                        <img src={html} alt="HTML Icon" />
                        <img src={sass} alt="Sass Icon" />
                        <img src={jsIcon} alt="JS Icon" />
                        <img src={reactIcon} alt="React Icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const WorkExperience = () => {
    return (
        <div className="work-container">
            <div className="item1">
                <h3>Cyrus Clothing</h3>
            </div>
            <div className="item2">
                <h3>Hotel bar and waiter</h3>
            </div>
        </div>
    )
}
