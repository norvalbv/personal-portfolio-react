import React, { useEffect, useRef } from 'react'
import './intro.scss';
import { init } from 'ityped'
import background from '../../../files/pexels-mart-production-7565462.mp4';

export default function Intro() {
    const textRef = useRef();
    
    useEffect(() => {
        init(textRef.current, { 
            typeSpeed: 90,
            backSpeed: 60,
            backDelay: 1250,
            showCursor: true, 
            strings: ['Front-end developer', 'Aspiring full-stack developer', 'Entrepreneur', 'Blockchain enthusiast'],
        });
    }, []);

    return (
        <div className="intro">
            {/* <video autoplay loop muted id="backgroundVideo">
                <source src={background} type="video/mp4" />
            </video> */}
            <video autostart loop muted autoPlay src={background} type="video/mp4" id="backgroundVideo"></video>
            <div className="text">
                <h1>Benjamin Norval</h1>
                <h2>A 22 year old <span ref={textRef}></span> 
                <br />
                from the United Kingdom</h2>
            </div>
        </div>
    )
}
