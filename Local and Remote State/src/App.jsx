import React, {useState} from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

const products = [
  {
    "id": 1,
    "category": "phones",
    "image": "iphone-12.jpg",
    "name": "Iphone 12",
    "price": 94.95,
    "color": [
      { "color": "Pacific Blue", "size": 128 },
      { "color": "Red", "size": 256 }
    ],
    "description": "Chip A14 Bionic."
  },
  {
    "id": 2,
    "category": "phones",
    "image": "iphone-se-family.jpg",
    "name": "iPhone SE",
    "price": 78.99,
    "color": [
      { "color": "Red", "size": 128 },
      { "color": "Black", "size": 256 }
    ],
    "description": "Chip A13 Bionic."
  },
  {
    "id": 3,
    "category": "headphones",
    "image": "airpods-wireless.png",
    "name": "Airpods",
    "price": 55.95,
    "type": [
      { "type": "Wireless Charger" },
      { "type": "No Wireless Charger"}
    ],
    "description": "Look stylish while stomping in the mud."
  }
]

export default function App() {
  const [type, setType] = useState("");
  

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

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="size">Filter by Type:</label>{" "}
            <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">All types</option>
              <option value="phones">Phones</option>
              <option value="headphones">Headphones</option>
            </select>
          </section>
          <section id="products">{products.map(renderProduct)}</section>
        </main>
      </div>
      <Footer />
    </>
  );
}
