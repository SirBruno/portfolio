import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductPage.css'

function ProductPage() {

  const [product, setProduct] = useState(null)
  const params = useParams()

  useEffect(() => {
    const getData = async () => {
      const url = `https://fakestoreapi.com/products/${params.id}`;

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        // Do anything you need to do to
        // data before this call:
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    }

    getData();
  }, [params.id]);

  return (
    <div className="container section">
      {
        product == null
          ? <div>
            Loading...
          </div>
          :
          <div className="product_main">
            <div>
              <img src={product.image} alt="product" />
            </div>
            <div>
              <span className="singleProduct_cat">{product.category}</span>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <div className="Products__PriceBox">
              <span className="Products__Price">{`$` + (product.price / 2).toFixed(2)}</span>
              <span className="Products__Price Discounted">{`$` + product.price}</span>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default ProductPage