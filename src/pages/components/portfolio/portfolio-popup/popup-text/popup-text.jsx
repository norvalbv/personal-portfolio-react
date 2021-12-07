import React from 'react';
import '../portfolio-popup.scss';

export default function PopupText({items}) {

    return (
        <div className="popup-text flex">
            <h2>{items.title}</h2>
            <img src={items.src} alt={items.alt} />
            <div className="text">
                <p className="description">{items.desc}</p>
                <p className="dates">{items.dates}</p>
                <p className="link"><a href={items.link} target="_blank">{items.link}</a></p>
            </div>
        </div>
    )
};