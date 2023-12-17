import './App.css'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'
import ProductPage from './components/ProductPage/ProductPage'
import Footer from './components/Footer/Footer'
import { Route, Routes, useParams } from 'react-router-dom'

function App() {


  function Category() {

    const params = useParams()

    const cats = [
      {
        param: "men",
        name: "men's clothing"
      },
      {
        param: "women",
        name: "women's clothing"
      }
    ]

    const c = cats.find(x => x.param === params.id)

    console.log(params.id)
    console.log(c === undefined)

    return (
      <div>
        {
          c === undefined ? "Not found." : <Products cat={c.name} />
        }
      </div>
    )
  }

  function Home() {
    return (
      <>
        <Hero />
        <Products cat="men's clothing" />
        <Products cat="women's clothing" />
        <Products cat="jewelery" />
        <Products cat="electronics" />
      </>
    )
  }

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="categories/:id" element={<Category />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App