import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image"
import HeroLogos from '../public/hero_logos.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bruno Pereira</title>
      </Head>

      <section className={styles.wip}><span>WORK IN PROGRESS</span></section>
      <section className={styles.one}>
        <span className={styles.nav}>
          <span>
            <a className={styles.linkDisabled}>Home</a>
          </span>
          <span>
            <Link href="#About">About</Link>
          </span>
          <span>
            <a className={styles.linkDisabled}>Work</a>
          </span>
          <span>
            <Link href="#Contact">Contact</Link>
          </span>
          <span className={styles.navSocialMedia}>
            <a href="https://github.com/SirBruno" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/sirbruno" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          </span>
        </span>
        <section className={styles.hero}>
          <main className={styles.main}>
            <h1 className={styles.title}>Bruno Pereira</h1>
            <h2 className={styles.subtitle}>Web Developer<span>ウェブデベロッパー</span></h2>
            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
            <br />
            <Link href="#Contact"><a className={styles.heroCTA}><FontAwesomeIcon icon={faPaperPlane} /> Contact</a></Link>
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
        </section>
      </section>
      <section id="About" className={styles.two}>
        <section>
          <div>
            <h2>About me</h2>
            <p>{`My name is Bruno, I'm ${new Date().getFullYear() - 1996} years old, and I'm a web developer from São Paulo, Brazil. I have experience with HTML, CSS, React.js, Next.js, and WordPress. My expertise is building commercial websites using a front-end framework or a CMS.`}</p>
            <br />
            <Link href="#Contact"><a className={styles.contactCTA}><FontAwesomeIcon icon={faPaperPlane} /> Contact</a></Link>
          </div>
        </section>
      </section>
      <section id="Contact" className={styles.two}>
        <section>
          <div>
            <h2>Contact</h2>
            <p>{"bruno.webjr@gmail.com"}</p>
            <p>{"São Paulo, Brazil."}</p>
          </div>
        </section>
      </section>
    </div>
  )
}