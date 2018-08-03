const express = require('express')
const router = express.Router()
const Chirp = require('../models/Chirp')

router.get('/', (req, res) => {
    Chirp.findAll().then( data => res.json(data))
})

router.post('/', (req, res) => {
    Chirp.create({author: 'Andy', body:'Hello my name is andy'})
    console.log('Posted data')
})

module.exports = router;