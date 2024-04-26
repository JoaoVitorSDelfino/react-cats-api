import yarnBall from './images/yarnball.png'

import Results from './components/Results'
import SearchComponent from './components/SearchComponent'
import AlertComponent from './components/bootstrap/AlertComponent'

import ContextFetchData from './api/UseFetchData'

import React, { useContext, useState, useEffect } from 'react'

function App() {
    const [searchResults, setSearchResults] = useState([])
    const [error, setError] = useState(0)

    const search = ''

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