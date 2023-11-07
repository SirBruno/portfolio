import React, { useEffect, useState } from 'react'
import './Product.css'

function Product() {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const url = "https://fakestoreapi.com/products";

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        // Do anything you need to do to
        // data before this call:
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }

    getData();
  }, []);

  console.log("products")
  console.log(products)

  const filteredProducts = (category) => {
    return products != null && products.filter(product => product.category === category).map(x =>
      <div key={x.id} className="Products__Card">
        <img alt={x.title} src={x.image} className="Products__Image"></img>
        <span className="Products__CardTitle">{x.title}</span>
        <span className="Products__CardDescription">{x.category}</span>
        <div className="Products__PriceBox">
          <span className="Products__Price">{`$` + (x.price / 2).toFixed(2)}</span>
          <span className="Products__Price Discounted">{`$` + x.price}</span>
        </div>
      </div>
    )
  }

  console.log("filtered products:")
  if (products != null) {
    console.log(filteredProducts("men's clothing"))
  }

  return (
    <div className="Products">
      <div className="Products__Container">
        <h3>Men's clothing</h3>
        <div className="Products__Grid">
          { filteredProducts("men's clothing") }
        </div>
      </div>
      <div className="Products__Container">
        <h3>Women's clothing</h3>
        <div className="Products__Grid">
          { filteredProducts("women's clothing") }
        </div>
      </div>
      <div className="Products__Container">
        <h3>Jewelery</h3>
        <div className="Products__Grid">
          { filteredProducts("jewelery") }
        </div>
      </div>
      <div className="Products__Container">
        <h3>Electronics</h3>
        <div className="Products__Grid">
          { filteredProducts("electronics") }
        </div>
      </div>
    </div>
  )
}

export default Product