import yarnBall from './images/yarnball.png'

function App() {
  return (
    <div className="App">
      <div class = 'container'>
            <h1> Cats <img src = {yarnBall} id = 'yarnball' alt='yarnball' /> </h1>
            <input type = "text" id = 'input' placeholder = "Search for a cat here!" />
            <button id = 'searchButton'> Search </button>
            <div id = 'infoContainer'>
                
            </div>

            <p id = 'errorMessage' style = {{ display: 'none' }}> </p>
        </div>
        <script src = '../src/main.js'> </script>
    </div>
  );
}

export default App;