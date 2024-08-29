const express = require("express")
const router = express.Router() 
const User = require('../../models/user')

router.get("/install", async (req, res) => {
    try {
        adminUser = {
            "login": "admin",
            "password": "1234",
        }

        await User.create({login: 'admin', password: '1234'});

        res.status(200).json({mensagem: "Banco de dados instalado com sucesso"})
    } catch (e) {
        res.status(500).json({mensagem: e})
    }
});

module.exports = router;