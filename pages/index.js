import React, {useEffect} from 'react';
import styles from '../styles/Home.module.scss'
import Hero from './sections/Hero/Hero.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
// import { gsap, Draggable, Flip, MotionPathPlugin } from "gsap/dist/all";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".aboutSection__title", {
      scrollTrigger: {
        trigger: ".aboutSection__content",
        y: 0
      },
      y: 200
    })
  }, [])

  return (
    <div>
      <Hero />
      <section className={`${styles.section_01} aboutSection`}>
        <div className={`${styles.content_area} aboutSection__content`}>
          <div>
            <div>
              <h2 className="aboutSection__title">About me</h2>
              {`I'm a creative web developer from Brazil, currently living in Japan.`}
            </div>
          </div>
          <div className={styles.experience}>
            <div>
              <h2 className="aboutSection__title">Skills</h2>
              <div className={styles.jobs}>
                <div>
                  <p>GSAP, Next.js, WordPress, Webflow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Contact" className={styles.two}>
        <section>
          <div>
            <h2>Contact</h2>
            <div>
              <p><a href="https://wa.me/5519971159735" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</a></p>
              <br />
              <h4><b>(19) 97115 9735</b></h4>
              <p>WhatsApp only!</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}