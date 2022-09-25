import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import styles from '../styles/Button.module.scss'

export default function Button(props) {

  return (
    <Link href="#Contact"><a className={`${styles.button} ${styles[props.style]}`}><FontAwesomeIcon icon={faPaperPlane} /> Contact</a></Link>
  )
}