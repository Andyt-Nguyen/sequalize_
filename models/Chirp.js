const Sequelize = require('sequelize')
const sequelize = require('../config')

const Chirp = sequelize.define('chirp', {
    author: { type: Sequelize.STRING },
    body: { type: Sequelize.STRING },
    created_at: Sequelize.DATE
})

Chirp.sync()

module.exports = Chirp