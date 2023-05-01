import React from 'react';
import styles from '../styles/Home.module.scss'
import Hero from './sections/Hero/Hero.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { gsap, ScrollTrigger, Draggable, Flip, MotionPathPlugin } from "gsap/dist/all";

export default function Home() {

  gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 

  return (
    <div>
      <Hero />
      <section className={styles.section_01}>
        <div className={styles.content_area}>
          <div>
            <div>
              <h2>About me</h2>
              {`I'm a creative web developer from Brazil, currently living in Japan.`}
            </div>
          </div>
          <div className={styles.experience}>
            <div>
              <h2>Skills</h2>
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