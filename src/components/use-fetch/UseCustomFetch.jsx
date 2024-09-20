import React from 'react';
import useFetch from './useFetch';

export const UseCustomFetch = () => {
  const { data, error, loading } = useFetch(
    'https://dummyjson.com/products',
    {}
  );

  console.log(data, error, loading);

  return (
    <div>
      <h1>UseFetch Custom Hook</h1>
    </div>
  );
};
