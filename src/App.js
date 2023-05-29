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
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </Section>
    </div>
  );
}

export default App