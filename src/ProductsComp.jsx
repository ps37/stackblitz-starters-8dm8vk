import React, { useState, useEffect } from 'react';
import { SearchComp } from './SearchComp.jsx';
import { ResultsComp } from './ResultsComp.jsx';

export const ProdsComp = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // async function fetchProds() {
    //   const data = await fetch('./mockProductsData.json');
    //   console.log(data);
    //   setProducts(data.json());
    // }
    // fetchProds();
  }, []);

  return (
    <div>
      <SearchComp />

      <ResultsComp products={products} />
    </div>
  );
};
