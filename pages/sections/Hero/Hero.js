import React from 'react';
import styles from '../Hero/Hero.module.scss'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
              <h3><span style={{borderBottom: '4px solid #ff5678'}}>Desenvolvedor Web</span> em Mogi Mirim, SP.</h3>
            </div>
            <h4 className={styles.hero__intro}>Olá! Me chamo Bruno e trabalho como freelancer realizando atualizações em sites já existentes ou desenvolvendo novos sites do zero.</h4>
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