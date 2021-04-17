import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './services/useFetch';
import PageNotFound from './PageNotFound';
import Spinner from './Spinner';

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [type, setType] = useState('');
  const { data: product, loading, error } = useFetch('products/' + id);

  if (loading) return <Spinner />;
  if (!product) return <PageNotFound />;
  if (error) throw error;

  return (
    <div id='detail'>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id='price'>${product.price}</p>

      <select id='type' value={type} onChange={(e) => setType(e.target.value)}>
        <option value=''>What Version?</option>
        {product.types.map((s) => (
          <option key={s.type} value={s}>
            {s.type}
          </option>
        ))}
      </select>

      <p>
        <button
          disabled={!type}
          className='btn btn-primary'
          onClick={() => navigate('/cart')}
        >
          Add to cart
        </button>
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
