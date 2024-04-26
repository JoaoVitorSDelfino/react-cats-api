import React, { useState, useContext } from 'react'
import { ContextFetchData } from '../api/UseFetchData'

import AlertComponent from '../components/bootstrap/AlertComponent'
import Results from '../components/Results'

const SearchComponent = () => {
  const { data, fetchData } = useContext(ContextFetchData);
  const [searchTerm, setSearchTerm] = useState('')

  const [error, setError] = useState(0)

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

      <Results data={data} error={error}/>
            
      <AlertComponent searchStatus={error}/>
    </div>
  );
};

export default SearchComponent