import React from 'react';
import styles from '../styles/Home.module.scss'
import { faGithub, faLinkedin, faFigma } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../components/Button.js'
import ImageReel from '../components/ImageReel.js'

export default function Home() {

  return (
    <div>
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
      <section className={styles.section_01}>
        <div className={styles.content_area}>
          <div>
            <div>
              <h2>About me</h2>
              <p>{`The year was 2018, I started my career as a web developer at a small digital agency in São Paulo, Brazil. It was then that I realized that learning HTML and CSS when I was 15 wasn't a waste of time after all.`}</p>
              <p>{`Building websites for small businesses was really fun, but after one and a half years doing that, I started to feel like something wasn't right. The job was relatively easy; the designer would send me an image of how the website was supposed to look like, and my job was to build the actual website using WordPress... with a “page builder”. Anyone could do that, even a monkey... probably even a ra- my point is, it was EASY, and so my salary wasn't that great.`}</p>
              <p>{`I was concerned about my future – I mean, bills were not getting any cheaper, and at the same time, I wasn't getting any younger. Fast-forward to today, I work as a Marketing Automation Analyst for one of the biggest digital agencies in the world, and I get paid... uhh... relatively well, if you know what I mean.`}</p>
              <p>{`When I was 15, it wasn't my dream to do Marketing Automation for a living – I'm pretty sure 15-year-old me would punch me in the face if he saw me today –, but as they say, “life is like the weather”, it's unpredictable. Still, even though sometimes life does confusing sh*t, I think that that's the beauty of it. If we always knew what was gonna happen next, life would be pretty boring.`}</p>
            </div>
            <Button style="regular" />
          </div>
          <div className={styles.experience}>
            <div>
              <h2>Experience</h2>
              <div className={styles.jobs}>
                <div>
                  <p><b>{"CRM & Marketing Automation Analyst"}</b></p>
                  <p>Full-time · 1 yr 4 mos+</p>
                  <p className={styles.half_opacity}>06/2021 - Present<br />São Paulo, Brazil</p>
                </div>
                <div>
                  <p><b>{"Jr. Developer"}</b></p>
                  <p>Full-time · 1 yr 2 mos</p>
                  <p className={styles.half_opacity}>04/2020 - 05/2021<br />São Paulo, Brazil</p>
                </div>
                <div>
                  <p><b>{"Web Developer"}</b></p>
                  <p>Full-time · 1 yr 6 mos</p>
                  <p className={styles.half_opacity}>10/2018 - 03/2020<br />São Paulo, Brazil</p>
                </div>
              </div>
            </div>
            <div>
              <h2>Education</h2>
              <div>
                <p><b>{"FATEC"}</b></p>
                <p>{"Associate's degree, Computer Systems Analysis"}</p>
                <p className={styles.half_opacity}>2017 - 2020</p>
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
              <p>{"bruno.webjr@gmail.com"}</p>
              <br />
              <p>{"Shibuya-ku, Tokyo, Japan."}</p>
            </div>
            <br />
            <span className={styles.half_opacity}>*This website is a work in progress, just like my life.</span>
          </div>
        </section>
      </section>
    </div>
  )
}