import React, { useState, useEffect } from 'react';
import PortfolioList from '../portfolio-list/portfolio-list';
import './portfolio.scss';
import { Coding, WorkExperience } from './data';
// import { Work } from '@mui/icons-material';

export default function Portfolio() {

    const [selected, setSelected] = useState('coding-projects');    

    const list = [ 
        { id: 'coding-projects', title: "Coding Projects"},
        { id: 'work-experience', title: "Work Experience"}
    ];

    const [data, setData] = useState(Coding);

    useEffect(() => {
        selected === 'coding-projects' ? setData(Coding) : setData(WorkExperience);
    }, [selected]);

    return (
        <div className="portfolio flex" id="my-work">
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
            {data}
        </div>
    )
}
