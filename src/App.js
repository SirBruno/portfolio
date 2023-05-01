import { useEffect } from 'react'
import './App.css'
import { gsap } from 'gsap'

function App() {

  useEffect(() => {
    if (typeof window !== undefined) {
      window.onload = () => {
        gsap.from(".App h1", {
          y: 200
        })
      }
    }
  }, [])

  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
