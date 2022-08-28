import React from 'react';
import { Grid } from 'react-loader-spinner'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image"
import inspireImg1 from '../public/4c41A6Sjvog.jpg'
import inspireImg2 from '../public/4eOTdeNPBRw.jpg'
import inspireImg3 from '../public/40KHzWGMJnY.jpg'
import inspireImg4 from '../public/1427134853.jpg'
import inspireImg5 from '../public/KaM0WN8tqBI.jpg'

export default function Home() {

  let inspireImgs = [inspireImg1, inspireImg2, inspireImg3, inspireImg4, inspireImg5]
  const [currImg, setCurrImg] = React.useState(inspireImg1);
  const [loaderOn, setLoaderOn] = React.useState(false);

  function handleClick() {
    setLoaderOn(true)
    inspireImgs.indexOf(currImg) == inspireImgs.length - 1
    ? setCurrImg(inspireImgs[0])
    : setCurrImg(inspireImgs[inspireImgs.indexOf(currImg) + 1])
  }

  return (
    <div>
      <Head>
        <title>Bruno Pereira</title>
      </Head>

      <section className={styles.one}>
        <section className={styles.hero}>
          <main className={styles.main}>
            <span className={styles.nav}>
              <span className={styles.navSocialMedia}>
                <a href="https://github.com/SirBruno" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/sirbruno" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
              </span>
            </span>
            <h1 className={styles.title}>BRUNO SILVA</h1>
            <h2 className={styles.subtitle}>シルバブルーノ</h2>
            <h1 className={styles.title2}>WEB DEVELOPER</h1>
            <h2 className={styles.subtitle}>Webデベロッパー</h2>
            <p className={styles.p}>{"My name is Bruno, I'm 26 years old, and I'm a web developer from São Paulo, Brazil. I know HTML, CSS, Next.js and WordPress. I'm also an expert in Marketing Automation, but that's a long story."}</p>
            <br />
            <Link href="#Contact"><a className={styles.heroCTA}><FontAwesomeIcon icon={faPaperPlane} /> Contact</a></Link>
          </main>
          <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <Image alt="decorative image" onLoadingComplete={() => setLoaderOn(false)} placeholder="blur" src={currImg} layout='fill' objectFit='cover' quality={100} />
            <div className={styles.imgLoader}>
              <Grid
                height="120"
                width="120"
                color="#000"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={loaderOn}
              />
            </div>
            <span onClick={handleClick} className={styles.inspireMe}>
            <FontAwesomeIcon icon={faChevronRight} />Inspire me</span>
          </div>
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