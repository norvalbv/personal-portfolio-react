import React, { useState } from 'react';
import './portfolio-popup.scss';
import Cyrus from './portfolio-data';
import PopupText from './popup-text/popup-text';

// import oiausd from '../../../../../public/cyrus-clothing-cover.jpg'

export default function PortfolioPopUp() {

    const [text, setText] = useState(Cyrus);

    const [selected, setSelected] = useState([]);

    return (
        <div className="portfolio-popup flex">
            {/* <h2>Cyrus Clothing</h2>
            {/* <button>x</button> */}
            {/* <img src={Cyrus} alt="Cover" />
            <div className="text">
                <p className="description">I founded an online apparel company that was publicly launched in early 
                2020. I solely managed the company in all aspects including carrying out 
                business to business transactions, dealing with customer queries, sales, 
                and managing the company website.</p>
                <p className="dates">Dates: April 2019 - March 2021</p>
                <p className="link"><a href="https://www.cyrusclothing.com" target="_blank"></a>www.cyrusclothing.com</p> */}
            {/* </div> */}

                {/* {Cyrus.title}
                <img src={Cyrus.src} alt={Cyrus.alt} />
                {Cyrus.description} */}

            {/* <ul className="work-type">
                {text.map(text => {
                    return <PopupText title={text.title} 
                    active={selected === text.className} 
                    setSelected={setSelected}
                    id={text.id}
                    />
                })} */}
            {/* </ul> */}
        </div>
    )
}
