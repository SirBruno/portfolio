import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bruno Pereira</title>
      </Head>

      <section className={styles.one}>
        <span className={styles.nav}>-- navigation goes here --</span>
        <section className={styles.hero}>
          <main className={styles.main}>
            <h1 className={styles.title}>Bruno Pereira</h1>
            <h2 className={styles.subtitle}>Web Developer</h2>
            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
            <br />
            <a href="https://wa.me/5519971159735" target="_blank" rel="noreferrer" className={styles.heroCTA}><FontAwesomeIcon icon={faWhatsapp} size='1x'/> WhatsApp</a>
            <span className={styles.whiteStripe}></span>
            <span className={styles.repeatGrid}>
              <Image src="/repeat_grid.png" alt="repeat grid" width="689" height="1167" />
            </span>
          </main>
          <div className={styles.heroRight}>
            <p className={styles.p}>-- image goes here --</p>
          </div>
        </section>
      </section>

    </div>
  )
}