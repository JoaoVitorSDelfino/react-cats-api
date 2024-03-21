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
function updateData(catData) {
    let name = document.getElementById('catName')
    let playfulness = document.getElementById('catPlayfulness')
    let length = document.getElementById('catLength')
    let weight = document.getElementById('catWeight')
    let lifeExpectancy = document.getElementById('catLifeExpectancy')
    let image = document.getElementById('catImage')

    name.innerHTML = 'Name: ' + catData.name
    playfulness.innerHTML = 'Playfulness (scale 1 to 5): ' + catData.playfulness
    length.innerHTML = 'Length: ' + catData.length
    weight.innerHTML = 'Weight: ' + catData.min_weight + ' - ' + catData.max_weight + ' pounds' 
    lifeExpectancy.innerHTML = 'Life expectancy: ' + catData.min_life_expectancy + ' - ' + catData.max_life_expectancy + ' years'
    image.src = catData.image_link
}

// Tratamento de erros
// Recebe 3 valores: 0, 1 e 2
// 0 -> Pesquisa bem sucedida, mostra o resultado e esconde quaisquer mensagens de erro previamente emitidas.
// 1 -> Input box vazia, mostra uma mensagem informando o erro.
// 2 -> Pesquisa não foi bem sucedida, mostra uma mensagem informando o erro 
function errorDisplay(value) {
    const data = document.getElementById('catInfo')
    var error = document.getElementById("errorMessage")

    if (value === 0) {
        data.style.display = 'block'
        error.style.display = 'none'
    } else {
        data.style.display = 'none'
        error.style.display = 'block'

        if (value === 1) {
            error.innerHTML = 'ERROR, input must not be empty!'
        } else if (value === 2) {
            error.innerHTML = 'ERROR, cat not found!'
        }
    }
}

const search = document.getElementById('searchButton')
const input = document.getElementById('input')
const info = document.getElementById('catInfo')
var error = document.getElementById("errorMessage")

search.addEventListener('click', function() {
    let catName = input.value

    // Verifica se um valor foi informado para a pesquisa
    if (catName != '') {
        getData(catName).then((data) => {
            const catData = data[0]
            // Verifica se a pesquisa foi bem sucedida
            if (catData != undefined) {
                updateData(catData)
                errorDisplay(0)
            } else {
                errorDisplay(2)
            }
        })
    } else {
        errorDisplay(1)
    }
})