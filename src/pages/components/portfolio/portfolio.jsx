import React from 'react';
import PortfolioList from '../portfolio-list/portfolio-list';
import './portfolio.scss';
import { useEffect, useState } from 'react';

export default function Portfolio() {

    const [selected, setSelected] = useState('work-experience');    

    const list = [ 
        { id: "work-experience", title: "Work Experience"}, 
        { id: "coding-projects", title: "Coding Projects"}
    ];
    
    return (
        <div className="portfolio flex">
            <h2>Portfolio</h2>
            <ul className="work-type">
                {list.map(item => {
                    return <PortfolioList title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    />
                })}
            </ul>
            <div className="container">
                <div className="item1">
                    <h3>Space Project</h3>
                </div>
                <div className="item2">
                    <h3>Personal Portfolio</h3>
                </div>
                <div className="item3">
                    <h3>Time Tracker App</h3>
                </div>
                <div className="item4">
                    <h3>Receipe Search App</h3>
                </div>
                <div className="item5">
                    <h3>Dad Joke Generator</h3>
                </div>
            </div>
        </div>
    )
}
