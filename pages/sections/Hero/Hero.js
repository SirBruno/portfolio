import React from 'react';
import styles from '../Hero/Hero.module.scss'
import { faGithub, faLinkedin, faFigma } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../../components/Button'
import Image from "next/image"
import heroImage from '../../../public/hero-image.svg'

export default function Hero() {
  return (
    <section className={styles.one}>
      <section className={styles.hero}>
        <main className={styles.main}>
          <div className={styles.hero__left}>
          <span className={styles.nav}>
            <span className={styles.navSocialMedia}>
              <a href="https://github.com/SirBruno/portfolio" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/sirbruno" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </span>
          </span>
            <div>
              <h1>BRUNO SILVA</h1>
              <h4>シルバブルーノ</h4>
            </div>
            <div>
              <h3>WEB DEVELOPER</h3>
              <h4>Webデベロッパー</h4>
            </div>
            <h4 className={styles.hero__intro}>こんにちは！ I&apos;m a <b>front-end developer</b> from Brazil, currently living in <b>Japan</b>.</h4>
            <Button style="big" />
          </div>
        </main>
        <div className={styles.heroImage}>
          <Image src={heroImage} alt="Art by Pablo Stanley." />
        </div>
      </section>
    </section>
  )
}