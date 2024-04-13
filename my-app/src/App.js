import yarnBall from './images/yarnball.png'

import SearchButton from './components/SearchButton'
import InputComponent from './components/InputComponent'

import React, { useState } from 'react'

import useFetchData from './components/useFetchData'

function App() {
  const [searchResults, setSearchResults] = useState(null)
  const fetchData = useFetchData()

  const handleSearch = async (searchTerm) => {
    try {
      const data = await fetchData(searchTerm)
      setSearchResults(data)
      console.log(data)
    } catch (error) {
      // Handle error
      console.error('Error searching:', error)
    }
  }
  return (
    <div className="App">
      <div class = 'container'>
          <h1> Cats <img src = {yarnBall} id = 'yarnball' alt='yarnball' /> </h1>
          <InputComponent onSearch={handleSearch} />
          <div id = 'infoContainer'></div>

          <p id = 'errorMessage' style = {{ display: 'none' }}> </p>
        </div>
        <script src = '../src/main.js'> </script>
    </div>
  );
}

export default App;