const Sequelize = require('sequelize')

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    login: {
        type: Sequelize.STRING,
        unique: true,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = User