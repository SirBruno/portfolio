import React from 'react';
import styles from '../styles/Home.module.scss'
import Hero from './sections/Hero/Hero.js'
import Image from "next/image"
import logoTransluz from '../public/logo-transluz.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Home() {

  return (
    <div>
      <Hero />
      <section className={styles.section_01}>
        <div className={styles.content_area}>
          <div>
            <div>
              <h2>Serviços</h2>
              <p>
                <h4>Atualização de site</h4> Correções, adições, alterações, etc.</p>
              <p><h4>Desenvolvimento de site</h4> Desde a concepção e aprovação do design até a entrega.</p>
            </div>
          </div>
          <div className={styles.experience}>
            <div>
              <h2>Clientes</h2>
              <div className={styles.jobs}>
                <div>
                  <div className={styles.logoTransluz}>
                    <Image src={logoTransluz} alt="Logo Transluz" />
                  </div>
                  <p><b><a href="https://transluzviagens.com.br" target="_blank" rel="noreferrer">{"Transluz Viagens"}</a></b></p>
                  <p>Atualização de site</p>
                  <p className={styles.half_opacity}>2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Contact" className={styles.two}>
        <section>
          <div>
            <h2>Contato</h2>
            <div>
              <p><a href="https://wa.me/5519971159735" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</a></p>
              <br />
              <h4><b>(19) 97115 9735</b></h4>
              <p>WhatsApp apenas!</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}