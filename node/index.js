const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {

    res.send('<h1>Desafio Full Cycle | Nginx Node')
})

app.listen(port, ()=> {
    console.log ('Rodando ' + port)
})