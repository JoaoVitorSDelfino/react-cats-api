const Cat = require('../models/cat')

function validateCat(dados) {
    if (!dados.description || !dados.name || !dados.image) {
        return {status: false, mensagem: 'ERRO, preencha todos os campos!'}
    } else {
        return {status: true, mensagem: 'Sucesso'}
    }
}

module.exports = {
    criar: async (dados) => {
        // Valida os dados recebidos
        try {
            if (validateCat(dados).status) {
                const novoGato = await Cat.create(dados)
    
                return {status: true, mensagem: 'Sucesso ao adcionar gato!', gato: novoGato}
            } else {
                return validateCat(dados)
            }
        } catch (e) {
            return e
        }
    },

    buscarPorNome: async (nome) => {
        const gato = await Cat.findOne({where: {name: nome}})

        if (gato) {
            return {status: true, mensagem: 'Sucesso ao buscar gato!', gato: gato}
        } else {
            return {status: false, mensagem: 'ERRO, gato não existe!'}
        }  
    },
}