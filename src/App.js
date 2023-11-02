import './App.css'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}

export default App