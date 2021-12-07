import React, { useEffect, useRef } from 'react'
import './intro.scss';
import { init } from 'ityped'
import IntroChild from './introchild';
import { Parallax } from 'react-scroll-parallax';

export default function Intro() {
    const textRef = useRef();
    
    useEffect(() => {
        init(textRef.current, { 
            typeSpeed: 90,
            backSpeed: 60,
            backDelay: 1250,
            showCursor: true, 
            strings: ['Front end developer', 'Aspiring full stack developer', 'Entrepreneur', 'Blockchain enthusiast'],
        });
    }, []);

    return (
        <div className="intro">
            <IntroChild />
            <div className="text">
                <h1>Benjamin Norval</h1>
                <h2>A 22 year old <span ref={textRef}></span> 
                <br />
                from the United Kingdom</h2>
            </div>  
        </div>
//             <div className="intro">
//                 <Parallax
//                     className="text"
//                     offsetYMax={700}
//                     offsetYMin={-170}
//                     offsetXMax={-330}
//                     offsetXMin={330}
//                 >
//                     <span className="h1">Hello</span>
//                 </Parallax>
//                 <Parallax
//                     className="background"
//                     offsetYMax={35}
//                     offsetYMin={-35}
//                 >
//                     <h2>A 22 year old <span ref={textRef}></span>  </h2>
//                 </Parallax>
//             </div>
//         //  /* </div> */
    )
}
