import React, { useState } from 'react';
import './portfolio-popup.scss';
import MyWork from './portfolio-data';
import PopupText from './popup-text/popup-text';

export default function PortfolioPopUp() {

    const [content, setContent] = useState(MyWork);
        // const [selected, setSelected] = useState([]);


    const [opened, setOpened] = useState(true);
    const click = () => setOpened(!opened);

    return (
        <div className={opened ? "portfolio-popup active flex" : "portfolio-popup flex"}>
            <p className="button" onClick={click}>X</p>
            {MyWork.map(text => {
                return <PopupText title={text.title} 
                src={text.src}
                alt={text.alt}
                description={text.description}
                dates={text.dates}
                link={text.link}
                />
            })}
        </div>
    )
}
