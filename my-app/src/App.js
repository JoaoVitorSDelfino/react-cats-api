import yarnBall from './images/yarnball.png'

import useFetchData from './api/useFetchData'
import Results from './components/Results'
import InputComponent from './components/InputComponent'

import React, { useState, useEffect } from 'react'

function App() {
  const [searchResults, setSearchResults] = useState([])
  const fetchData = useFetchData()

  useEffect(() => {
    console.log("Updated search results:", searchResults)
  }, [searchResults])

  const handleSearch = async (searchTerm) => {
    if (searchTerm === '') {
      console.log('Error, empty input')
    }

    const data = await fetchData(searchTerm)

    if (data.length > 0) {
      setSearchResults(data)
    } else if (data.length === 0) {
      console.log('Error, no data found')
    }
  }
  
  return (
    <div className="App">
      <div class = 'container'>
          <h1> Cats <img src = {yarnBall} id = 'yarnball' alt='yarnball' /> </h1>
          <InputComponent onSearch={handleSearch} />
          <Results data={searchResults} />

          <p id = 'errorMessage' style = {{ display: 'none' }}> </p>
        </div>
        <script src = '../src/main.js'> </script>
    </div>
  );
}

export default App;