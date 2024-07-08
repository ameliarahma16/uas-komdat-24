'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('HALO INI SAYA AMELIA RAHMA HIDAYAH-S1SI220353-UAS-PROJEK-KOMDAT!\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)