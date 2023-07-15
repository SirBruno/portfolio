import { useLayoutEffect, useRef } from 'react'
import './Section.css'
import { gsap, ScrollTrigger } from 'gsap/all'

function Section(props) {

  const section = useRef()
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.config({
    ignoreMobileResize: true
  })

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".section__inner",
          onEnter: self => console.log(self.isActive),
          start: "top 85%"
        }
      })

      timeline.to([".section__title", ".section__pContainer p"], {
        y: 0,
        duration: 0.5
      })
      gsap.to(".section__pContainer", {
        top: 0,
        marginTop: 50
      })

      gsap.to('.section__pContainer', {
        duration: 2,
        padding: 50,
        background: "#00f",
        scrollTrigger: {
          trigger: ".section__pContainer",
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={section} className={`section ${props.theme}`}>
      <div className="section__inner">
        <div className="section__titleContainer">
          <h2 className="section__title">{props.title}</h2>
        </div>
        <div className="section__pContainer">
          <p>{props.children}</p>
        </div>
      </div>
      <p className="gsapText">"in <a href="https://greensock.com/gsap/" target='_blank' rel="noopener noreferer">gsap</a> we trust."</p>
    </section>
  )
}

export default Section