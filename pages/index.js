import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image"
import HeroLogos from '../public/hero_logos.png'
import heroImage from '../public/bruno_img.jpg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bruno Pereira</title>
      </Head>

      <section className={styles.wip}><span>WERK IN PROGRESS</span></section>
      <section className={styles.one}>
        <span className={styles.nav}>
          <span>
            <a>Home</a>
          </span>
          <span>
            <a>About</a>
          </span>
          <span>
            <a>Work</a>
          </span>
          <span>
            <a>Contact</a>
          </span>
          <span className={styles.navSocialMedia}>
            <a href="https://github.com/SirBruno" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/sirbruno" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          </span>
        </span>
        <section className={styles.hero}>
          <main className={styles.main}>
            <h1 className={styles.title}>Bruno Pereira</h1>
            <h2 className={styles.subtitle}>Web Developer</h2>
            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
            <br />
            <a href="https://wa.me/5519971159735" target="_blank" rel="noreferrer" className={styles.heroCTA}><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</a>
            <div className={styles.heroLogos}>
              <span>
                <Image src={HeroLogos} alt="Logos" quality="100" height="50" width="392" />
              </span>
            </div>
            <span className={styles.whiteStripe}></span>
            <span className={styles.repeatGrid}>
              <Image src="/repeat_grid.png" alt="repeat grid" width="689" height="1167" />
            </span>
            <span className={styles.blackRectangle}></span>
          </main>
          <div className={styles.sectionRight}>
            <div style={{width: '100%', height: '650px', position: 'relative'}}>
                <Image className={styles.heroImage} src={heroImage} alt="Bruno Pereira" quality="100" layout='fill' objectFit='contain' />
            </div>
          </div>
        </section>
      </section>
      <section className={styles.two}>
        <section>
          <div>
            <h2>About me</h2>
            <p>{"My name is Bruno, I'm 25 years old, and I'm a web developer from São Paulo, Brazil."}</p>
          </div>
          <div className={styles.sectionRight}>-- image goes here --</div>
        </section>
      </section>
    </div>
  )
}