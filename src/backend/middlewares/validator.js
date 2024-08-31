const { body, validationResult } = require('express-validator')

const validarLogin = [
    body('username').trim().escape(),
    body('password').trim().escape(),
    body('username').isString().notEmpty().withMessage('Insira um nome de usuário').custom(value => {
        if (value.includes('/^[a-zA-Z0-9_-]+$/')) {
            throw new Error('O usuário não deve conter caracteres especiais! Apenas números ou letras')
        }
            return true;
    }),
    body('password').isString().notEmpty().withMessage('Insira a senha')
        .custom(value => {
        if (value.includes('/^[a-zA-Z0-9_-]+$/')) {
            throw new Error('A senha não deve conter caracteres especiais! Apenas números ou letras')
        }
            return true;
    }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: false, mensagem: errors.array() })
        }
        next()
    }
];

const validarGato = [
    body('name').trim().escape(),
    body('image').trim().escape(),
    body('description').trim().escape(),
    body('name').isString().notEmpty().withMessage('Insira um nome para o gato').custom(value => {
        if (value.includes('/^[a-zA-Z0-9_-]+$/')) {
            throw new Error('O nome do gato não deve conter caracteres especiais! Apenas números ou letras')
        }
            return true;
    }),
    body('image').isString().notEmpty().withMessage('Insira uma imagem'),
    body('description').isString().notEmpty().withMessage('Insira uma descrição'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: false, mensagem: errors.array() })
        }
        next()
    }
];

module.exports = {
    validarLogin,
    validarGato,
}