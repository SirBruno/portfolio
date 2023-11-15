import './App.css'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';

const Categories = () => (
  <div>
    <h2>Categories</h2>
    <p>Coming soon...</p>
  </div>
);

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<><Hero /><Products /></>} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App