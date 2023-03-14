import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import styles from '../styles/Button.module.scss'

export default function Button(props) {

  return (
    <Link href="https://wa.me/5519971159735"><a className={`${styles.button} ${styles[props.style]}`}><FontAwesomeIcon icon={faWhatsapp} /> Contato</a></Link>
  )
}