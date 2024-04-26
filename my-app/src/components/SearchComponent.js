import React, { useState, useContext } from 'react'
import { ContextFetchData } from '../api/UseFetchData';

const SearchComponent = () => {
  const { fetchData } = useContext(ContextFetchData);
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  };

  const handleSearch = () => {
    console.log(searchTerm)
    fetchData(searchTerm)
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent