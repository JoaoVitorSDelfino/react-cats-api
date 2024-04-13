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
function createData(catData) {
    const catDiv = document.createElement("div")
    catDiv.classList.add("catInfo")

    const catName = document.createElement("h2")
    catName.textContent = catData.name
    catName.classList.add("catName")

    const catPlayfulness = document.createElement("p")
    catPlayfulness.textContent = "Playfulness (scale 1 to 5): " + catData.playfulness
    catPlayfulness.classList.add("catPlayfulness")

    const catLength = document.createElement("p")
    catLength.textContent = "Length: " + catData.length
    catLength.classList.add("catLength")

    const catWeight = document.createElement("p")
    catWeight.textContent = "Weight: " + catData.min_weight + ' - ' + catData.max_weight + ' pounds'
    catWeight.classList.add("catWeight")

    const catLifeExpectancy = document.createElement("p")
    catLifeExpectancy.textContent = "Life expectancy: " + catData.min_life_expectancy + ' - ' + catData.max_life_expectancy + ' years'
    catLifeExpectancy.classList.add("catLifeExpectancy")

    const catImage = document.createElement("img")
    catImage.src = catData.image_link
    catImage.classList.add("catImage")

    catDiv.appendChild(catName)
    catDiv.appendChild(catPlayfulness)
    catDiv.appendChild(catLength)
    catDiv.appendChild(catWeight)
    catDiv.appendChild(catLifeExpectancy)
    catDiv.appendChild(catImage)

    return catDiv
}

// Tratamento de erros
// Recebe 3 valores: 0, 1 e 2
// 0 -> Pesquisa bem sucedida, mostra o resultado e esconde quaisquer mensagens de erro previamente emitidas.
// 1 -> Input box vazia, mostra uma mensagem informando o erro.
// 2 -> Pesquisa não foi bem sucedida, mostra uma mensagem informando o erro 
function errorDisplay(value) {
    const data = document.getElementById('infoContainer')
    var error = document.getElementById('errorMessage')

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

// Event listener ao clicar o botão de pesquisar
search.addEventListener('click', function() {
    console.log('teste')
    let catName = input.value
    // Apaga a pesquisa anterior
    const container = document.getElementById("infoContainer")
    container.innerHTML = ''

    // Verifica se um valor foi informado para a pesquisa
    if (catName !== '') {
        getData(catName).then((data) => {
            const catData = data
            console.log(catData)
            // Verifica se a pesquisa foi bem sucedida
            if (catData.length > 0) {
                catData.forEach(cat => {
                    const catInfo = createData(cat)
                    container.appendChild(catInfo)
                })
                errorDisplay(0)
            } else {
                errorDisplay(2)
            }
        })
    } else {
        errorDisplay(1)
    }
})