import yarnBall from './images/yarnball.png'

import Results from './components/Results'
import SearchComponent from './components/SearchComponent'
import AlertComponent from './components/bootstrap/AlertComponent'

import ContextFetchData from './api/UseFetchData'
import UseFetchData from './api/UseFetchData'

import React, { useContext, useState } from 'react'

function App() {
    const [searchResults, setSearchResults] = useState([])
    const [error, setError] = useState(0)

    const context = useContext(ContextFetchData)

    // Tratamento de pesquisa
    // 0 - Pesquisa bem sucedida
    // 1 - Pesquisa vazia
    // 2 - Sem resultados
    const search = async (searchTerm) => {
      // Tratar pesquisa vazia
      if (searchTerm === '') {
        setError(1)
      }

      const data = context
      console.log(data)

      // Verifica se a pesquisa foi bem sucedida
      if (data.length > 0) {
        setError(0)
        setSearchResults(data)
      } else if (data.length === 0) {
        setError(2)
      }
    }
  
  return (
    <ContextFetchData>
      <div className="App">
        <div class = 'container'>
            <h1> Cats <img src = {yarnBall} id = 'yarnball' alt='yarnball' /> </h1>
            <SearchComponent onSearch={search} />
            <Results data={searchResults} error={error}/>
            
            <AlertComponent searchStatus={error}/>
          </div>
          <script src = '../src/main.js'> </script>
      </div>
    </ContextFetchData>
  )
}

export default App