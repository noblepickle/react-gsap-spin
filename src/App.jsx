import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

function App() {

  useGSAP(() => {
    // gsap code here...
    gsap.to('.reactLogo', { 
      scrollTrigger: {
        trigger: '.box',
        scrub: 2,
        start: "top top",
        end: "bottom bottom",
        
        //markers: true
      },
      rotate: 1440,
    });

    gsap.to('.heading', {
      scrollTrigger: {
        trigger: '.box',
        scrub: 2,
        start: "top top",
        end: "+=200px",
        
        //markers: true
      },
      opacity: 0,
      letterSpacing: -50,
      x: -40,
      y: -100,
      rotate: 300,
      color: "#00D8FF",
    });
  })

  return (
    <div>
        <div className='containerHero'>
        <img src={reactLogo} className='reactLogo' alt="" aria-label='React Logo' />
        <h1 className='heading'>React</h1>
      </div>
    </div>
  )
}

export default App
