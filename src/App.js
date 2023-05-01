import { useEffect } from 'react'
import './App.css'
import { gsap } from 'gsap'
import heroShape from './assets/heroShape.svg'

function App() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onload = () => {
        gsap.from([".App h1", ".App .heroShape"], {
          y: 200,
          stagger: 0.5,
          opacity: 0
        })
      }

      document.querySelectorAll(".App")[0].addEventListener("mouseleave", () => gsap.to(".heroShape", {
        x: 0,
        y: 0,
        transform: "none",
        delay: 0.1
      }));

      document.querySelectorAll(".App")[0].addEventListener("mousemove", (e) => gsap.to(".heroShape", {
        x: (e.pageX - window.innerWidth / 2) / 10,
        y: (e.pageY - window.innerHeight / 2) / 10,
        duration: 0.5,
        rotation: (e.pageY - window.innerHeight / 2) / 50,
        ease: "power3",
      }));
    }
  }, [])

  return (
    <div className="App">
      <h1>Hello!</h1>
      {/* <span class="backgroundOverlay"></span> */}
      <img src={heroShape} className="heroShape" />
    </div>
  );
}

export default App;
