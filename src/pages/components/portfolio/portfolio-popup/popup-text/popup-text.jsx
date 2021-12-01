import React from 'react';
import '../portfolio-popup.scss';

export default function PopupText({title, src, alt, description, dates, link}) {


    return (
        <div className="popup-text flex">
            <h2>{title}</h2>
            <img src={src} alt={alt} />
            <div className="text">
                <p className="description">{description}</p>
                <p className="dates">{dates}</p>
                <p className="link"><a href={link} target="_blank">{link}</a></p>
            </div>
        </div>
    )
}