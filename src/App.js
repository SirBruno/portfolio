import './App.css'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
import { Route, Routes, useParams } from 'react-router-dom'

function App() {


  function Men() {
    const params = useParams()

    console.log(params)

    return (
      <div>
        <Products cat="men's clothing" />
      </div>
    )
  }

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Products cat="men's clothing" />
            <Products cat="women's clothing" />
            <Products cat="jewelery" />
            <Products cat="electronics" />
          </>
        } />
        <Route path="categories/:id" element={<Men />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App