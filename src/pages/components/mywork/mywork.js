import React, {useState, useEffect} from 'react';
import './mywork.scss';
import {Coding, WorkExperience} from './data';
import PortfolioList from '../portfolio-list/portfolio-list';

export default function MyWork() {
    // Portfolio List
    const [selected, setSelected] = useState('coding-projects');    

    const list = [ 
        { id: 'coding-projects', title: "Coding Projects"},
        { id: 'work-experience', title: "Employement History"}
    ];

    const [data, setData] = useState(Coding);

    useEffect(() => {
        selected === 'coding-projects' ? setData(Coding) : setData(WorkExperience);
    }, [selected]);

    return (
        <div className='myWork'>
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
