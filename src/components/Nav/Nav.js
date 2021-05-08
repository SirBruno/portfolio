import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {

  const location = useLocation();
  console.log(location.pathname)

  return (
    <nav className={styles.Nav}>
      <Link className={location.pathname === "/" ? styles.highlightedNavLink : null} to="/">Home</Link>
      <a href="google.com">About Me</a>
    </nav>
  )
}