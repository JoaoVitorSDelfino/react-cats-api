const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../db/app.sqlite',
    pool: {
        max: 5,         // Número máximo de conexões no pool
        min: 0,         // Número mínimo de conexões no pool
        acquire: 30000, // Tempo máximo, em milissegundos, que o pool tentará obter uma conexão antes de gerar um erro
        idle: 10000,    // Tempo máximo, em milissegundos, que uma conexão pode permanecer inativa antes de ser liberada
    }
})

module.exports = sequelize