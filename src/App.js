import { useEffect } from 'react'
import './App.css'
import { gsap } from 'gsap'
import heroIcon from './assets/heroIcon.png'

function App() {

  
  useEffect(() => {

    gsap.defaults({ duration: 1, stagger: 0.2 })

    const timeline2 = gsap.timeline({repeat: -1})
    timeline2.pause()
    const timeline = gsap.timeline()

    if (typeof window !== 'undefined') {
      window.onload = () => {
        timeline.from([".App h1 span"], { y: 200, duration: 0.5, opacity: 0, ease: "power1.inOut" })
        timeline.from([".nav__logo"], { x: -200, duration: 0.2, opacity: 0 })
        timeline.from([".nav__links a"], { x: 200, stagger: 0.1, opacity: 0, duration: 0.2 }, "<")
        timeline.to([".nav__logo img"], { rotation: 360, x: 60, ease: "power4.out" }, "<")
        timeline.to([".nav__logo img"], { rotation: -390, x: -5, duration: 3, ease: "power1.inOut" }, "-=0.5")
        timeline.to([".nav__logo img"], { rotation: -360, x: 0, ease: "back.in" })
        timeline.call(() => timeline2.play())
        timeline2.to(".App h1 span", { filter: "blur(5px)" })
        timeline2.to(".App h1 span", { filter: "blur(0px)" }, "-=0.5")
        timeline2.to(".App h1 span", { delay: 5 })
      }
    }
  }, [])

  return (
    <div className="App">
      <nav className="nav">
        <span className="nav__logo">
          <img src={heroIcon} alt="Hero icon" />
        </span>
        <div className="nav__links">
          <a href="https://github.com/SirBruno" target='_blank' rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/profile/sibruno" target='_blank' rel="noreferrer">LinkedIn</a>
        </div>
      </nav>
      <h1>
        <span>B</span>
        <span>R</span>
        <span>U</span>
        <span>N</span>
        <span>O</span>
        <span> </span>
        <span>S</span>
        <span>I</span>
        <span>L</span>
        <span>V</span>
        <span>A</span>
      </h1>
    </div>
  );
}

export default App;
