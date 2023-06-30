import { gsap, ScrollTrigger } from 'gsap/all'
import './App.css'
import Hero from './components/Hero/Hero'
import HtmlCss from './components/HtmlCss/HtmlCss'
import Section from './components/Section/Section'

function App() {

  return (
    <div className="App">
      <Hero gsap={gsap} ScrollTrigger={ScrollTrigger} />
      <Section title={"About me"}>
        Hi, my name is Bruno, and I'm a web developer from Brazil, currently living in Japan. I started learning HTML & CSS when I was 15, then learned JavaScript when I was in college. After I came to Japan, I decided to go one step further and learn how to do complex animations with GSAP, though I'm still working on it.
      </Section>
      {/* <HtmlCss gsap={gsap} ScrollTrigger={ScrollTrigger} /> */}
      <Section theme={"dark"} title={"JavaScript"}>
        I began learning JS in 2017 when I started college. Back then I didn't know anything other than HTML & CSS, but I knew I wanted to specialize in web development, so JavaScript was the language I chose for most of my college projects.
      </Section>
      <Section title={"Animations"}>
        I only started getting deep into complex website animations a few months ago, but I think I'm getting the hang of GSAP now. I also experimented with Motion One for a while and it's pretty good and easy to use too. I have no preference between GSAP and Motion One, I just spend more time with GSAP because I started learned it first so I kinda got used to it.
      </Section>
    </div>
  );
}

export default App