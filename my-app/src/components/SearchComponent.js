import React, { useState, useContext } from 'react'
import { ContextFetchData } from '../api/UseFetchData'

import AlertComponent from '../components/bootstrap/AlertComponent'
import Results from '../components/Results'

const SearchComponent = () => {
  const { data, fetchData } = useContext(ContextFetchData);
  const [searchTerm, setSearchTerm] = useState('')

  const [error, setError] = useState(0)

  // Tratamento de pesquisa
  // 0 - Pesquisa bem sucedida
  // 1 - Pesquisa vazia
  // 2 - Sem resultados
  const result = () => {
    const search = searchTerm

    if (search === '') {
      setError(1)
    }

    // Verifica se a pesquisa foi bem sucedida
    if (data.length > 0) {
      setError(0)
    } else if (data.length === 0) {
      setError(2)
    }

    console.log(error)
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  };

  const handleSearch = () => {
    fetchData(searchTerm)
    result()
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