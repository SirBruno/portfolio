import './App.css'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'
function App() {

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Products />
    </div>
  );
}

export default App