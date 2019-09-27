const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Rota ok')
})

app.get('/bugou' ,(req, res)=>{
    res.send("bugou tudo")
})

app.listen(3033, ()=>{
    console.log('tudo funcionando')
})