const express = require('express')
const cors = require("cors")
const app = express()

const fs = require('fs')
const https = require('https')

const chavePrivada = fs.readFileSync("../certificate/key.pem", "utf8")
const certificado = fs.readFileSync("../certificate/cert.pem", "utf8")
const credenciais = { key: chavePrivada, cert: certificado }

const port = 3001

// Config do banco de dados
const db = require('../db/connection.js')

db.authenticate().then(() => {
    console.log("Conectou ao banco de dados com sucesso")
}).catch(err => {
    console.log("Ocorreu um erro ao conectar", err)
})

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('teste')
});

app.use('/', require('./routes/catRoute'))
app.use('/', require('./routes/install'))
app.use('/', require('./routes/login'))

const httpsServer = https.createServer(credenciais, app)

httpsServer.listen(port, function() {
    console.log('Server is running at port ' + port)
})