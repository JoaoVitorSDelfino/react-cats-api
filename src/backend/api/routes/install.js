const express = require("express")
const router = express.Router() 
const bcrypt = require("bcrypt")

const User = require('../../models/user')

router.get("/install", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash('1234', 15)

        adminUser = {
            "login": "admin",
            "password": hashedPassword,
        }

        await User.create({login: 'admin', password: '1234'});

        res.status(200).json({mensagem: "Banco de dados instalado com sucesso"})
    } catch (e) {
        res.status(500).json({mensagem: e})
    }
});

module.exports = router;