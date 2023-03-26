import React from 'react';
import styles from '../styles/Home.module.scss'
import Hero from './sections/Hero/Hero.js'
import Image from "next/image"
import logoTransluz from '../public/logo-transluz.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Home() {

  return (
    <div>
      <Hero />
      <section className={styles.section_01}>
        <div className={styles.content_area}>
          <div>
            <div>
              <h2>About me</h2>
              I'm a web developer by heart and marketing analyst by accident.
            </div>
          </div>
          <div className={styles.experience}>
            <div>
              <h2>Skills</h2>
              <div className={styles.jobs}>
                <div>
                  <p><b>Marketing</b></p>
                  <p>Salesforce Marketing Cloud, AmpScript, SQL.</p>
                </div>
                <div>
                  <p><b>Web</b></p>
                  <p>Next.js, WordPress, Webflow.</p>
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