import React, { useState } from 'react';
import './portfolio-popup.scss';
import {MyWork, codingProjects} from './portfolio-data';
import PopupText from './popup-text/popup-text';

export default function PortfolioPopUp() {

    // const [content, setContent] = useState(MyWork[0]);


    // const [active, setActive] = useState(MyWork[0]);

    // // active selects the correct index and passes it to the map function

    // // Map then passes it to the component as a attribute


    // const items = content.map(item => ({ 
    //     title: item.title,
    //     src: item.src,
    //     alt: item.alt,
    //     desc: item.description,
    //     dates: item.dates,
    //     link: item.link
    // }));

    // console.log(items);


    const [opened, setOpened] = useState(true);
    const click = () => setOpened(!opened);

    return (
        <div className={opened ? "portfolio-popup active flex" : "portfolio-popup flex"}>
            <p className="button" onClick={click}>X</p>

            <PopupText items={MyWork} />
            {/* {MyWork.map(items => {
                return <PopupText items={items}/>
            })} */}
                        {/* {MyWork.map(items => {
                return <PopupText items={items}/>
            })} */}
        </div>
    )
}
