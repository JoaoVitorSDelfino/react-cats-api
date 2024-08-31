const express = require("express")
const winston = require('winston')
const bcrypt = require('bcrypt')
const router = express.Router()

const User = require('../../models/user') 

const { validarLogin } = require("../../middlewares/validator.js")

const jwt = require('jsonwebtoken')

const loginLog = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: "../logs/loginError.log", level: "error" }),
      new winston.transports.File({ filename: "../logs/activity.log" }),
    ],
})

router.post("/login", validarLogin, async (req, res) => {
    const { username, password } = req.body
    loginLog.info('Login try: ' + username)
  
    try {
        const findUser = await User.findOne({ username })

        if (findUser) {
            loginPassword = String(findUser.password)
            const compare = bcrypt.compare(password, loginPassword)

            if (compare) {
                const token = jwt.sign({ username: findUser.username }, 'secret', {expiresIn: "1h"})
                loginLog.info('Successful login try: ' + username)

                res.status(200).json({ status: true, message: "Login aprovado", token: token });
            } else {
                loginLog.info('Unesuccessful login try: ' + username)

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