import { gsap, ScrollTrigger } from 'gsap/all'
import './App.css'
import Hero from './components/Hero/Hero'
import HtmlCss from './components/HtmlCss/HtmlCss'
import Section from './components/Section/Section'

function App() {

  return (
    <div className="App">
      <Hero gsap={gsap} ScrollTrigger={ScrollTrigger} />
      <HtmlCss gsap={gsap} ScrollTrigger={ScrollTrigger} />
      <Section theme={"dark"} title={"JavaScript"}>
        I began learning JS in 2017 when I started college. Back then I didn't know anything other than HTML & CSS, but I knew I wanted to specialize in web development, so JavaScript was the language I chose for most of my college projects.
      </Section>
    </div>
  );
}

export default App