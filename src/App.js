import { useEffect } from 'react'
import './App.css'
import { gsap } from 'gsap'

function App() {

  const timeline = gsap.timeline();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onload = () => {
        timeline.from([".App h1", ".App .heroShape"], {
          y: 200,
          stagger: 0.5,
          opacity: 0
        })

        timeline.from([".nav__logo"], {
          x: -200,
          duration: 0.2,
          opacity: 0
        })
        
        timeline.from([".nav__links a"], {
          x: 200,
          stagger: 0.1,
          opacity: 0,
          duration: 0.2
        }, "<")
      }
    }
  }, [])

  return (
    <div className="App">
      <nav className="nav">
        <span className="nav__logo">LOGO</span>
        <div className="nav__links">
          <a>Link 1</a>
          <a>Link 2</a>
          <a>Link 3</a>
        </div>
      </nav>
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
