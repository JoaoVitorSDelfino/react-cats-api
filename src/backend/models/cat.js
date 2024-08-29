const Sequelize = require('sequelize')
const db = require('../db/connection')

const Cat = db.define('cat', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        unique: true, 
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.BLOB,
        allowNull: false,
    },
    weight: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    height: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    playfullness: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Cat