const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const path = require('path')
const port = process.env.PORT || 3000
const chirpRoute = require('./routes/chirpRoute')
const app = express()

app.use('/',express.static(__dirname+'/public'))
app.use('/api/chirp', chirpRoute)

app.listen( port, () => console.log(`Listening on port ${port}...`))