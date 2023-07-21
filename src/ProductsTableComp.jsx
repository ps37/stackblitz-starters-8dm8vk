import React, { useState } from 'react';

export const ProductsTableComp = (props) => {


  return (
    <div>
      <tr>
        <th colSpan="2">Name</th>
        <th colSpan="2">Price</th>
      </tr>
      {
        props.products.map((prod) => (
          <tr>
            <td>{prod.name}</td>
            <td>{prod.price}</td>
          </tr>
        ))
      }
    </div>
  );
}