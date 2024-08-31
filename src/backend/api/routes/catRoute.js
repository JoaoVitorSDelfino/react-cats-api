const express = require("express")
const router = express.Router()
const winston = require('winston')
const apicache = require('apicache')

const Gato = require('../catControl')
const authenticate = require('../../middlewares/authToken.js')
const { validarGato } = require("../../middlewares/validator.js")

const apiLog = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: "../logs/apiError.log", level: "error" }),
      new winston.transports.File({ filename: "../logs/api.log" }),
    ],
})

// Inicialize o apicache
let cache = apicache.middleware

// Rota com cache
router.get('/getCat/:nome', authenticate, cache('5 minutes'), async (req, res) => {
    try {
        const logMessage = `${req.method} ${req.originalUrl}`
        apiLog.info(logMessage)

        const gato = await Gato.buscarPorNome(req.params.nome)

        // Valida se o gato foi encontrado
        if (gato.status) {
            res.status(201).json({ gato: gato })
        } else {
            res.status(400).json({ gato: gato })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'ERRO ao buscar o gato' })
    }
})

// Rota sem cache
router.post("/addCat", authenticate, validarGato, async (req, res) => {
    try {
        req.body.image = (req.body.image).replace(/&#x2F;/g, '/')

        console.log(req.body)

        const logMessage = `${req.method} ${req.originalUrl}`
        apiLog.info(logMessage)

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

module.exports = router