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
    <div>
      <h1>product</h1>
      <p>stuff</p>
      {product != null && product.title}
    </div>
  )
}

export default ProductPage