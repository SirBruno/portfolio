import { useRef } from "react";
import './Hero.css'

function Hero(props) {
  const hero = useRef();

  return (
    <div ref={hero} className="hero">
      <h1 className="hero__title">Cupcake</h1>
      <h2>A fictional streetwear store.</h2>
      <button className="hero__btn">Shop Now</button>
      <div className="hero__bottom">
        <div className="hero__address">
          <span>Shibuya City, Tokyo</span>
          <span>Japan, 151-0073</span>
        </div>
        <span>Powered by <b>React</b></span>
      </div>
    </div>
  )

}

export default Hero