import React from 'react';
import { Grid } from 'react-loader-spinner'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
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
      <section className={styles.one}>
        <section className={styles.hero}>
          <main className={styles.main}>
            <span className={styles.nav}>
              <span className={styles.navSocialMedia}>
                <a href="https://github.com/SirBruno/portfolio" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/sirbruno" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
              </span>
            </span>
            <div className={styles.hero_left}>
              <div>
                <h1 className={styles.title}>BRUNO SILVA</h1>
                <h2 className={styles.subtitle}>シルバブルーノ</h2>
              </div>
              <div>
                <h1 className={styles.title2}>WEB DEVELOPER</h1>
                <h2 className={styles.subtitle}>Webデベロッパー</h2>
              </div>
              <p className={styles.p}>{"My name is Bruno, I'm 26 years old, and I'm a web developer from São Paulo, Brazil. I know HTML, CSS, Next.js and WordPress. I'm also an expert in Marketing Automation, but that's a long story."}</p>
              <Link href="#Contact"><a className={styles.contact_cta}><FontAwesomeIcon icon={faPaperPlane} /> Contact</a></Link>
            </div>
          </main>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
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
      <section className={styles.section_01}>
        <div className={styles.content_area}>
          <div>
            <div>
              <h2>About me</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet arcu ullamcorper eu, neque ac auctor pulvinar vel. Consectetur fermentum facilisis diam purus porttitor ipsum mauris elit aliquet. Eu at ornare vitae molestie viverra. Sem risus enim ornare nulla morbi. Neque viverra pulvinar facilisis viverra maecenas et semper lectus. Ut semper odio ultricies ullamcorper odio sed maecenas turpis rutrum. Vel integer aliquet magna odio at tincidunt. Molestie neque enim sit natoque magna a nec libero ac. Facilisis nulla ac pellentesque risus duis aliquam elit.</p>
            </div>
            <Link href="#Contact"><a className={styles.contact_cta}><FontAwesomeIcon icon={faPaperPlane} /> Contact</a></Link>
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
              <p>{"São Paulo, Brazil."}</p>
            </div>
            <br />
            <span className={styles.half_opacity}>*This website is a work in progress.</span>
          </div>
        </section>
      </section>
    </div>
  )
}