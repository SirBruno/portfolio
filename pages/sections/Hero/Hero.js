import React from 'react';
import styles from '../Hero/Hero.module.scss'
import Button from '../../../components/Button'
import Image from "next/image"
import heroImage from '../../../public/hero-image.svg'

export default function Hero() {
  return (
    <section className={styles.one}>
      <section className={styles.hero}>
        <main className={styles.main}>
          <div className={styles.hero__left}>
            <div>
              <h1>BRUNO SILVA</h1>
            </div>
            <div>
              <h3><span style={{borderBottom: '4px solid #ff5678'}}>Web developer</span> in Tokyo, Japan.</h3>
            </div>
            <h4 className={styles.hero__intro}>Hello! My name is Bruno, and I'm a web developer from Brazil, currently living in Japan.</h4>
            <Button style="big" />
          </div>
        </main>
        <div className={styles.heroImage}>
          <Image src={heroImage} alt="Art by Pablo Stanley." />
        </div>
      </section>
    </section>
  )
}