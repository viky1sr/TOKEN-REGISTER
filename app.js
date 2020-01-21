const express = require('express')
const app = express()
const http = require('http').Server(app)
require('./db')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes/main')(app)


app.listen(2012, () => {
    console.log('Example app listening on port 2012')
})