const express = require("express")
const router = express.Router()

const Gato = require('../catControl')
 
router.get('/getCat/:id', async (req, res) => {
    try {
        const gato = await Gato.buscarPorNome(req.params.nome)

        // Valida se o gato foi encontrado
        if (gato.status) {
            res.status(201).json({gato: oficina})
        } else {
            res.status(400).json({gato: oficina})
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'ERRO ao buscar o gato'})
    }
})

router.post("/addCat", async (req, res) => {
    try {
        const novoGato = await Cat.criar(req.body)

        res.status(201).send({ message: "Gato adicionado com sucesso!", gato: novoGato })
    } catch (e) {
        res.status(500).send({ message: "ERRO ao adicionar gato" })
    }

})

module.exports = router;