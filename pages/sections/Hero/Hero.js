import React from 'react';
import styles from '../Hero/Hero.module.scss'
import { faGithub, faLinkedin, faFigma } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../../components/Button'
import ImageReel from '../../../components/ImageReel.js'

export default function Hero() {
  return (
    <section className={styles.one}>
      <section className={styles.hero}>
        <main className={styles.main}>
          <span className={styles.nav}>
            <span className={styles.navSocialMedia}>
              <a href="https://github.com/SirBruno/portfolio" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.figma.com/file/oA2teARK09CiucW27OqRtS/Portfolio?node-id=0%3A1" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFigma} /></a>
              <a href="https://www.linkedin.com/in/sirbruno" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </span>
          </span>
          <div className={styles.hero__left}>
            <div>
              <h1>BRUNO SILVA</h1>
              <h4>シルバブルーノ</h4>
            </div>
            <div>
              <h3>WEB DEVELOPER</h3>
              <h4>Webデベロッパー</h4>
            </div>
            <h4 className={styles.hero__intro}>{`My name is Bruno, I'm 26 years old, and I'm a web developer from Brazil, currently living in Tokyo. I know my way around Next.js, with the help of Sass and other web technologies.`}</h4>
            <Button style="big" />
          </div>
        </main>
        <ImageReel />
      </section>
    </section>
  )
}