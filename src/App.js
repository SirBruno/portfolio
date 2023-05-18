import { useRef } from 'react'
import './App.css'
import Hero from './components/Hero'

function App() {

  const app = useRef();

  return (
    <div ref={app} className="App">
      <Hero app={app} />
    </div>
  );
}

export default App;
