import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './services/useFetch';
import PageNotFound from './PageNotFound';
import Spinner from './Spinner';

export default function Detail() {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch('products/' + id);

  if (loading) return <Spinner />;
  if (!product) return <PageNotFound />;
  if (error) throw error;

  return (
    <div id='detail'>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id='price'>${product.price}</p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
