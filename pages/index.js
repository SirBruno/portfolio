import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bruno Pereira</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <section className={styles.one}>
        <section className={styles.hero}>
          <main className={styles.main}>
            <h1 className={styles.title}>Bruno Pereira</h1>
            <h2 className={styles.subtitle}>Web Developer</h2>
            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
          </main>
          <div className={styles.heroRight}>
            <p className={styles.p}>-- image goes here --</p>
          </div>
        </section>
      </section>

    </div>
  )
}