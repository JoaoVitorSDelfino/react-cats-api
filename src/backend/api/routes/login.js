const express = require("express")
const router = express.Router()
const User = require('../../models/user') 

const jwt = require('jsonwebtoken')

router.post("/login", async (req, res) => {
    const { username, password } = req.body
    console.log(username, password)
  
    try {
        const findUser = await User.findOne({ username })

        if (findUser) {
            if (password == findUser.password) {
                const token = jwt.sign({ username: findUser.username }, 'secret', {expiresIn: "1h"})
                res.status(200).json({ status: true, message: "Login aprovado", token: token });
            } else {
                res.status(401).json({ status: false, message: "ERRO, senha errada!" });
            }
        } else {
          res.status(401).json({ status: false, message: "ERRO, usuário inválido!"});
        }
    } catch (e) {
        res.status(500).json({
          success: false,
          message: e,
        });
    }
});

module.exports = router;