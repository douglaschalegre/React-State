import React, { useState } from 'react';
import Spinner from './Spinner';
import useFetch from './services/useFetch';
import { useParams } from 'react-router-dom';

export default function Products() {
  const [type, setType] = useState('');
  const { category } = useParams();

  const { data: products, loading, error } = useFetch(
    'products?category=' + category
  );

  function renderProduct(p) {
    return (
      <div key={p.id} className='product'>
        <a href='/'>
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </a>
      </div>
    );
  }

  const filteredProducts = type
    ? products.filter((p) => p.types.find((t) => t.type === type))
    : products;

  if (error) throw error;

  if (loading) return <Spinner />;
  return (
    <>
      <section id='filters'>
        <label htmlFor='type'>Filter by Type:</label>{' '}
        <select
          id='type'
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value=''>All types</option>
          <option value='Pacific Blue'>Pacific Blue</option>
          <option value='Black'>Black</option>
          <option value='Red'>Red</option>
          <option value='No Wireless Charger'>No Wireless Charger</option>
          <option value='Wireless Charger'>Wireless Charger</option>
        </select>
        {<h2>Found {filteredProducts.length} items</h2>}
      </section>
      <section id='products'>{filteredProducts.map(renderProduct)}</section>
    </>
  );
}
