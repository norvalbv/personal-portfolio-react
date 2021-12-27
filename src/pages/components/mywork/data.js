import cyrusImg from '../../../files/cyrus-clothing-landscape.jpg';
import ipTracker from '../../../files/ip-tracker-screenshot.png';
import timeTracker from '../../../files/time-tracker-screenshot.png';
import glenYrAfon from '../../../files/glen-yr-afon.jpg';
import personalPortfolio from '../../../files/personal-portfolio-screenshot.png';
import interactiveCommentSection from '../../../files/interactive-comment-section.png';
import ecommerce from '../../../files/landingpage.png';
import html from '../../../files/html.png';
import css from '../../../files/css.png';
import sass from '../../../files/4375465_logo_sass_icon.png';
import jsIcon from '../../../files/javascript.png';
import reactIcon from '../../../files/atoms-symbol.png';


export const Coding = () => {
    return (
        <div className="item-container">
            <div className="item">
                <div className="left">
                    <h3>Personal Portfolio</h3>
                    <p>This is my personal portfolio page where i have practiced and tried to used latest methods of building a web app.</p>
                    <button><a href='https://github.com/norvalbv/personal-portfolio-react' target='_blank'>Read more</a></button>
                </div>
                <div className="right">
                    <img src={personalPortfolio} alt="Personal Portfolio Screenshot" />
                    <div className="icons">
                        <p>Technologies used:</p>
                        <img src={html} alt="HTML Icon" />
                        <img src={sass} alt="Sass Icon" />
                        <img src={jsIcon} alt="JS Icon" />
                        <img src={reactIcon} alt="React Icon" />
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="left">
                    <h3>IP Tracker</h3>
                    <p>A IP tracking application that uses the implementation of two APIs (Leaflet.js and IPify) to make the application work.</p>
                    <button><a href='https://norvalbv.github.io/IP-Address-Tracker/' target='_blank'>Check Live Demo</a></button>
                    <button><a href='https://github.com/norvalbv/IP-Address-Tracker' target='_blank'>Read more</a></button>
                </div>
                <div className="right">
                    <img src={ipTracker} alt="IP Tracker Screenshot" />
                    <div className="icons">
                        <p>Technologies used:</p>
                        <img src={html} alt="HTML Icon" />
                        <img src={css} alt="Sass Icon" />
                        <img src={jsIcon} alt="JS Icon" />
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="left">
                    <h3>Time Tracker</h3>
                    <p>This is a project that reads a JSON database asynchronously and renders out informations based on your activities</p>
                    <button><a href='https://norvalbv.github.io/time-tracker/' target='_blank'>Check Live Demo</a></button>
                    <button><a href="https://github.com/norvalbv/time-tracker" target="_blank">Read more</a></button>
                </div>
                <div className="right">
                    <img src={timeTracker} alt="Time Tracker Screenshot" />
                    <div className="icons">
                        <p>Technologies used:</p>
                        <img src={html} alt="HTML Icon" />
                        <img src={sass} alt="Sass Icon" />
                        <img src={jsIcon} alt="JS Icon" />
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="left">
                    <h3>E-Commerce site</h3>
                    <p>An ongoing e-commerce project built with React and MUI.</p>
                    <button><a href="https://benjamin-ecommerce-demo.netlify.app/" target="_blank">Check Live Demo</a></button>
                    <button><a href="https://github.com/norvalbv/ecommerce" target="_blank">Read more</a></button>
                </div>
                <div className="right">
                    <img src={ecommerce} alt="Time Tracker Screenshot" />
                    <div className="icons">
                        <p>Technologies used:</p>
                        <img src={html} alt="HTML Icon" />
                        <img src={sass} alt="Sass Icon" />
                        <img src={jsIcon} alt="JS Icon" />
                        <img src={reactIcon} alt="React Icon" />
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="left">
                    <h3>Interactive comment section</h3>
                    <p>An interactive comment section built with React</p>
                    <button><a href="https://github.com/norvalbv/interactive-comment-section" target="_blank">Read more</a></button>
                </div>
                <div className="right">
                    <img src={interactiveCommentSection} alt="Interactive Comment Section screenshot" />
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
        <div className="item-container">
            <div className="item">
                <div className="left">
                    <h3>Cyrus Clothing</h3>
                    <p>I founded an online apparel company that was publicly launched in early 
                        2020. I solely managed the company in all aspects including carrying out 
                        business to business transactions, dealing with customer queries, sales, 
                        and managing the company website.</p>
                    <a href="https://www.cyrusclothing.com" className='link'>www.cyrusclothing.com</a>
                </div>
                <div className="right">
                    <img src={cyrusImg} alt="Cyrus Clothing Cover" />
                    <div className="icons">
                        <p>Dates: Apr 2019 - Mar 2021</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="left">
                    <h3>Hotel bar and waiter</h3>
                    <p>Working on social events upwards of 100 people per sitting, including, but not limited to, weddings, funerals, and birthdays.</p>
                </div>
                <div className="right">
                <img src={glenYrAfon} alt="Glen yr Afon House Hotel" />
                   <div className="icons">
                       <p>Dates: Sep 2016 - Sep 2019</p>
                   </div>
                </div>
            </div>
        </div>
    )
}
