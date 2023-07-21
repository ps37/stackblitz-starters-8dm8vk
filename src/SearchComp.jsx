import React, { useState } from 'react';

export const SearchComp = (props) => {
  const [searchText, setSearchText] = useState('');
  const [showInStock, setShowInStock] = useState(false);

  return (
    <form>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        id="searchText"
        name="searchText"
        type="text"
        placeholder="Search..."
      />

      <input
        onChange={(e) => setShowInStock(e.target.value)}
        value={showInStock}
        id="showInStock"
        name="showInStock"
        type="checkbox"
      />
    </form>
  );
};
