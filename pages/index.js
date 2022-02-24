import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <a href="https://www.google.com" target="_blank" rel="noreferrer" className={styles.heroCTA}><FontAwesomeIcon icon={faWhatsapp} size='1x'/> WhatsApp</a>
            <p className={styles.p}>-- CTA goes here --</p>
          </main>
          <div className={styles.heroRight}>
            <p className={styles.p}>-- image goes here --</p>
          </div>
        </section>
      </section>

    </div>
  )
}