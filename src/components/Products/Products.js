import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Product.css'

function Product(props) {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const url = "https://fakestoreapi.com/products";

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }

    getData();
  }, []);

  const filteredProducts = (category) => {
    return products == null
      ? <div className="products_loader_container">
        <div className="products_loader"></div>
        <div className="products_loader"></div>
        <div className="products_loader"></div>
        <div className="products_loader"></div>
      </div>
      : products.filter(product => product.category === category).map(x =>
        <Link key={x.id} className="Products__Card" to={`product/${x.id}`}>
          <img alt={x.title} src={x.image} className="Products__Image"></img>
          <span className="Products__CardTitle">{x.title}</span>
          <span className="Products__CardDescription">{x.category}</span>
          <div className="Products__PriceBox">
            <span className="Products__Price">{`$` + (x.price / 2).toFixed(2)}</span>
            <span className="Products__Price Discounted">{`$` + x.price}</span>
          </div>
        </Link>
      )
  }

  return (
    <div className="Products">
      <div className="Products__Container">
        <h3>{props.cat}</h3>
        <div className="Products__Grid">
          {filteredProducts(props.cat)}
        </div>
      </div>
    </div>
  )
}

export default Product