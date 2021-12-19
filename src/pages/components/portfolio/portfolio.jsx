import React, { useState, useEffect } from 'react';
import PortfolioList from '../portfolio-list/portfolio-list';
import './portfolio.scss';
import { Coding, WorkExperience } from './data';
import PortfolioPopUp from './portfolio-popup/portfolio-popup';
// import { Work } from '@mui/icons-material';
import { MyWork, codingProjects } from './portfolio-popup/portfolio-data';
import New from './new';

export default function Portfolio() {

    // Portfolio List
    const [selected, setSelected] = useState('coding-projects');    

    const list = [ 
        { id: 'coding-projects', title: "Coding Projects"},
        { id: 'work-experience', title: "Work Experience"}
    ];

    const [data, setData] = useState(MyWork);

    useEffect(() => {
        selected === 'coding-projects' ? setData(MyWork) : setData(codingProjects);
    }, [selected]);

    // Portfolio Popup

    // const live = [

    // ]

    return (
        <div className="portfolio flex" id="my-work">
        {/* <PortfolioPopUp /> */}
            <h2>My Work</h2>
            <ul className="work-type">
                {list.map(item => {
                    return <PortfolioList title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    />
                })}
            </ul>
            {/* {data} */}
            {data.map(items => {
                return <New items={items}/>
            })}
        </div>

    )
}
