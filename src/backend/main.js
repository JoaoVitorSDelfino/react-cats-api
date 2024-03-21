// Função assíncrona que obtém o resultado da pesquisa da API
async function getData(catName) {
    var url = 'https://api.api-ninjas.com/v1/cats?name=' + catName

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'dfUTR8K+sJut7qcjZwadOw==mzaFqsho8Bchu73p'
        },
    })
    
    return await response.json()
}

// Atualiza os dados do HTML para refletir o resultado da pesquisa da API
function showData(catData) {
    var name = document.getElementById('catName')
    var playfulness = document.getElementById('catPlayfulness')
    var length = document.getElementById('catLength')
    var weight = document.getElementById('catWeight')
    var lifeExpectancy = document.getElementById('catLifeExpectancy')
    var image = document.getElementById('catImage')

    name.innerHTML = 'Name: ' + catData.name
    playfulness.innerHTML = 'Playfulness (scale 1 to 5): ' + catData.playfulness
    length.innerHTML = 'Length: ' + catData.length
    weight.innerHTML = 'Weight: ' + catData.min_weight + ' - ' + catData.max_weight + ' pounds' 
    lifeExpectancy.innerHTML = 'Life expectancy: ' + catData.min_life_expectancy + ' - ' + catData.max_life_expectancy + ' years'
    image.src = catData.image_link
}

const search = document.getElementById("searchButton")
const input = document.getElementById("input")

search.addEventListener("click", function() {
    let catName = input.value

    if (catName != '') {
        getData(catName).then((data) => {
            const catData = data[0]
            showData(catData)
        })
    } else {
        let error = document.getElementById("errorMessage")

        error.innerHTML = 'ERROR, input must not be empty!'
        error.style.display = "block"
    }
})