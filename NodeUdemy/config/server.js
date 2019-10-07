const express = require("express");
const consign = require('consign')
const bodyParser = require('body-parser')


const app = express();

app.set('views', './app/views')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}))

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app)

module.exports = app
