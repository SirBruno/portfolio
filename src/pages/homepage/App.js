import React from 'react';
import { Counter } from '../../features/counter/Counter';
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
          <h1>Hi, my name is Bruno Pereira, and i'm a frontend developer.</h1>
          <p>São Paulo, Brazil.</p>
          <p>WhatsApp: <b>(19) 97115 9735</b>.</p>
          <Counter />
        </div>
      </header>
    </div>
  );
}

export default App;