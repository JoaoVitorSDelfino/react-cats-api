import yarnBall from './images/yarnball.png'

import SearchComponent from './components/SearchComponent'

import ContextFetchData from './api/UseFetchData';

function App() {

  return (
    <ContextFetchData>
      <div className="App">
        <div class = 'container'>
            <h1> Cats <img src = {yarnBall} id = 'yarnball' alt='yarnball' /> </h1>
            <SearchComponent/>
          </div>
          <script src = '../src/main.js'> </script>
      </div>
    </ContextFetchData>
  )
}

export default App