const express = require("express")
const router = express.Router()

const Gato = require('../catControl')
const authenticate = require('../../middlewares/authToken.js')
 
router.get('/getCat/:id', authenticate, async (req, res) => {
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
        const novoGato = await Gato.criar(req.body)

        if (novoGato.status) {
            res.status(201).send({ status: true, message: "Gato adicionado com sucesso!", gato: novoGato })
        } else {
            res.status(200).send(novoGato)
        }
    } catch (e) {
        res.status(500).send({ e })
    }

})

module.exports = router;