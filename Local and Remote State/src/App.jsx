import React, {useState, useEffect} from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { getProducts } from "./services/productService"


export default function App() {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    getProducts("phones").then((response) => setProducts(response));
  }, [])

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <a href="/">
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </a>
      </div>
    );
  }
  const filteredProducts = category ? products.filter((p) => p.category === category) : products;
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="size">Filter by Type:</label>{" "}
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">All types</option>
              <option value="phones">Phones</option>
              <option value="headphones">Headphones</option>
            </select>
            {<h2>Found {filteredProducts.length} items</h2>}
          </section>
          <section id="products">{filteredProducts.map(renderProduct)}</section>
        </main>
      </div>
      <Footer />
    </>
  );
}
