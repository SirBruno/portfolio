import React from 'react';
// import { Counter } from '../../features/counter/Counter';
import styles from './App.module.css';
import { Link, useLocation } from 'react-router-dom'

function App() {

  const location = useLocation();
  console.log(location.pathname)

  return (
    <>
      <div className={styles.App}>
        <nav className={styles.Nav}>
          <Link className={location.pathname === "/" ? styles.highlightedNavLink : null} to="/">Home</Link>
          <a href="#aboutMe">About Me</a>
        </nav>
        <header className={styles.AppHeader}>
          <div>
            <h1>Hi, my name is Bruno Pereira, and i'm a Frontend Developer.</h1>
            <p>São Paulo, Brazil.</p>
            <p>Skills: <b>React.js</b></p>
            <p>
              <a className={styles.socialIcon} href="https://github.com/sirbruno" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              <a className={styles.socialIcon} href="https://www.linkedin.com/in/sirbruno" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            </p>
            {/* <Counter /> */}
          </div>
        </header>
      </div>
      <section id="aboutMe" className={styles.aboutMe}>
        <div>
          <h1>About me</h1>
          <p>My name is Bruno, and i'm a Frontend Developer living in São Paulo, Brazil. I know a thing or two about React, though most of my professional experience has been around Digital Marketing Automation.</p>
        </div>
      </section>
    </>
  );
}

export default App;