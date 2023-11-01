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

  return (
    <div className="Products">
      <div className="Products__Container">
        <h3>Products</h3>
        <div className="Products__Grid">
          {
            products != null &&
            products.map(x =>
              <div key={x.id} className="Products__Card">
                <img src={x.image} className="Products__Image"></img>
                <span className="Products__CardTitle">{x.title}</span>
                <span className="Products__CardDescription">men's clothing</span>
                <div className="Products__PriceBox">
                  <span className="Products__Price">$49.97</span>
                  <span className="Products__Price Discounted">$99.95</span>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Product