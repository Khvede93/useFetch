import React from 'react';
import useFetch from './useFetch';
import './styles.css';

export const UseCustomFetch = () => {
  const { data, error, loading } = useFetch(
    'https://dummyjson.com/products',
    {}
  );

  console.log(data, error, loading);

  return (
    <div className='container'>
      <h1 className='page-title'>UseFetch Custom Hook</h1>
      {loading ? <h2>Loading Data ! Please Wait</h2> : null}
      {error ? <h2>Something Went Wrong !</h2> : null}
      {data && data.products && data.products.length
        ? data.products.map((product) => (
            <h2 className='product-title' key={product.id}>
              {product.title}
            </h2>
          ))
        : null}
    </div>
  );
};
