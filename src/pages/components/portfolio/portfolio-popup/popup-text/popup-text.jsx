import React from 'react';
import './popup-text.scss';

export default function PopupText({title, active, id, setSelected}) {


    return (
        <div className="item-div">
            <li className={active ? "work-type active" : "work-type"}
                onClick={() => setSelected(id)}>
                {title}
            </li>
        </div>
    )
}