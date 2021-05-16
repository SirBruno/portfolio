import React from 'react';
// import { Counter } from '../../features/counter/Counter';
import styles from './App.module.css';
import { Link, useLocation } from 'react-router-dom'

function App() {

  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className={styles.App}>
      <nav className={styles.Nav}>
        <Link className={location.pathname === "/" ? styles.highlightedNavLink : null} to="/">Home</Link>
        <a href="google.com">About Me</a>
      </nav>
      <header className={styles.AppHeader}>
        <div>
          <h1>Hi, my name is Bruno Pereira, and i'm a junior developer.</h1>
          <p>São Paulo, Brazil.</p>
          <p>Skills: <b>React.js</b> | <b>Salesforce Marketing Cloud</b></p>
          <p>
            <a className={styles.socialIcon} href="https://github.com/sirbruno" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a className={styles.socialIcon} href="https://www.linkedin.com/in/sirbruno" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            <a className={styles.socialIcon} href="https://wa.me/5519971159735" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp-square"></i></a>
          </p>
          {/* <Counter /> */}
        </div>
      </header>
    </div>
  );
}

export default App;