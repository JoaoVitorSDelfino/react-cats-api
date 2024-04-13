import yarnBall from './images/yarnball.png'

import SearchButton from './components/SearchButton'
import DataFetcher from './components/DataFetcher'

function App() {
  return (
    <div className="App">
      <div class = 'container'>
          <h1> Cats <img src = {yarnBall} id = 'yarnball' alt='yarnball' /> </h1>
          <input type = "text" id = 'input' placeholder = "Search for a cat here!" />
          <SearchButton text="Search" />
          <DataFetcher />
          <div id = 'infoContainer'></div>

          <p id = 'errorMessage' style = {{ display: 'none' }}> </p>
        </div>
        <script src = '../src/main.js'> </script>
    </div>
  );
}

export default App;