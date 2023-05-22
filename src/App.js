import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import './App.css'
import Hero from './components/Hero/Hero'

function App() {

  const section = useRef()
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.config({ 
    ignoreMobileResize: true
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".myDiv",
          onEnter: self => console.log(self.isActive),
        }
      })

      timeline.to(["section h2", "section p"], {
        y: 0,
        duration: 0.5,
        ease: "power1.out",
        opacity: .75
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <div className="App">
      <Hero gsap={gsap} />
      <section ref={section}>
        <div className="myDiv">
          <h2>HTML & CSS</h2>
          <p>I spent my entire teenagehood studying only HTML & CSS, not only because that's the only thing I needed to customize my website, but also because I was afraid of JavaScript back then.</p>
        </div>
      </section>
    </div>
  );
}

export default App;