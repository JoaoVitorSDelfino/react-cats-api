import React, { useState, useContext, useEffect } from 'react'
import { ContextFetchData } from '../../api/UseFetchData'

import AlertComponent from '../components/bootstrap/AlertComponent'
import Results from '../components/Results'

const SearchComponent = () => {
  const { data, fetchData } = useContext(ContextFetchData)
  const [searchTerm, setSearchTerm] = useState('')
  // Controla se é a primeira pesquisa do usuário, evita mensagem de erro ao iniciar.
  const [searchInitiated, setSearchInitiated] = useState(false)

  const [error, setError] = useState(0)

  // Tratamento de pesquisa
  // 0 - Pesquisa bem sucedida
  // 1 - Pesquisa vazia
  // 2 - Sem resultados
  const result = () => {
    const search = searchTerm

    // Se o usuário ainda não realizou a primeira pesquisa, a função é descontinuada.
    if (!searchInitiated) {
      return
    }

    if (search === '') {
      setError(1)
    }

    // Verifica se a pesquisa foi bem sucedida
    if (data.length > 0) {
      setError(0)
    } else if (data.length === 0) {
      setError(2)
    }
  }

  useEffect(() => {
    result()
  })

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = () => {
    setSearchInitiated(true)
    fetchData(searchTerm)
  }

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>

      {/* Validação para garantir que o componente Results vai atualizar quando ambos data e error sofrerem mudanças*/}
      {(data.length > 0 || error !== 0) && <Results data={data} error={error}/>}
            
      <AlertComponent searchStatus={error}/>
    </div>
  )
}

export default SearchComponent