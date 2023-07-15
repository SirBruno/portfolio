import { gsap, ScrollTrigger } from 'gsap/all'
import './App.css'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
function App() {

  return (
    <div className="App">
      <Hero gsap={gsap} ScrollTrigger={ScrollTrigger} />
      <Section title={"About me"}>
        Hi, my name is Bruno, and I'm a web developer from Brazil, currently living in Japan. I started learning HTML & CSS when I was 15, then learned JavaScript when I was in college. After I came to Japan, I decided to go one step further and learn how to do complex animations with GSAP, though I'm still working on it.
      </Section>
    </div>
  );
}

export default App