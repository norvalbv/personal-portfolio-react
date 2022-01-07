import React, { useState, useEffect, useRef } from 'react'
import './intro.scss';
import { init } from 'ityped'
import IntroChild from './introchild';
// import fog from 'vanta/dist/vanta.fog.min';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Intro() {

    // const [vantaEffect, setVantaEffect] = useState(0);

    // const myRef = useRef(null);

    // useEffect(() => {
    //     if (!vantaEffect) {
    //       setVantaEffect(fog({
    //         el: myRef.current
    //       }))
    //     }
    //     return () => {
    //       if (vantaEffect) vantaEffect.destroy()
    //     }
    //   }, [vantaEffect])

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
                <h1>Hello.
                    <br />
                    I am Benjamin</h1>
                <h2>A 22 year old
                <br />
                <span ref={textRef}></span> 
                <br />
                from the United Kingdom</h2>
            </div>
            
            <div className="scroll-down">
                <p>Scroll Down</p>
                <ArrowForwardIcon fontSize='small' id="arr-forward" />
                <ArrowDownwardIcon fontSize='small' id="arr-down" />
            </div>
        </div>
    )
}
