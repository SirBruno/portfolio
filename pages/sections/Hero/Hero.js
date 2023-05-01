import React, {useEffect} from 'react';
import styles from '../Hero/Hero.module.scss'
import Button from '../../../components/Button'
import Image from "next/image"
import heroImage from '../../../public/hero-image.svg'
import { gsap, ScrollTrigger, Draggable, Flip, MotionPathPlugin } from "gsap/dist/all";

export default function Hero() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

    gsap.from([".hero__title", ".hero__subtitle", ".hero__intro", ".hero__cta"], {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    })
    
    gsap.from([".hero__image"], {
      y: 200,
      opacity: 0,
      duration: 1
    })

    document.querySelectorAll(".hero__image")[0].addEventListener("mouseleave", () => gsap.to(".hero__image", {
      x: 0,
      y: 0,
      transform: "none",
      delay: 0.1
    }));

    document.querySelectorAll(".hero__image")[0].addEventListener("mousemove", (e) => gsap.to(".hero__image", {
      x: (e.pageX - window.innerWidth / 2) / 10,
      y: (e.pageY - window.innerHeight / 2) / 10,
      duration: 0.5,
      ease: "power3",
      scale: 1.1,
      rotation: -(e.pageX - window.innerWidth / 2) / 100,
    }));
  })

  return (
    <section className={styles.one}>
      <section className={`${styles.hero} hero`}>
        <main className={styles.main}>
          <div className={styles.hero__left}>
            <div>
              <h1 className="hero__title">BRUNO SILVA</h1>
            </div>
            <div>
              <h3 className="hero__subtitle"><span style={{borderBottom: '4px solid #ff5678'}}>Web developer</span> in Tokyo, Japan.</h3>
            </div>
            <h4 className={`${styles.hero__intro} hero__intro`}>{`Hello! My name is Bruno, and I'm a web developer from Brazil, currently living in Japan.`}</h4>
            <div className="hero__cta">
              <Button style="big" />
            </div>
          </div>
        </main>
        <div className={`${styles.heroImage} hero__image`}>
          <Image src={heroImage} alt="Art by Pablo Stanley." />
        </div>
      </section>
    </section>
  )
}