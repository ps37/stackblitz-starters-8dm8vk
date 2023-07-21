import React, { useState } from 'react';
import { ProductsTableComp } from './ProductsTableComp.jsx';

export const ResultsComp = ({ products }) => {
  const fruits = products.filter((prod) => prod.category === 'Fruits');
  const vegetables = products.filter((prod) => prod.category === 'Vegetables');

  return (
    <div>
      <div class="products">
        <h2>Fruits</h2>

        <ProductsTableComp products={fruits} />
      </div>

      <div class="products">
        <h2>Vegetables</h2>

        <ProductsTableComp products={vegetables} />
      </div>
    </div>
  );
};
