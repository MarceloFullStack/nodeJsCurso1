const express = require("express");
const consign = require('consign')


const app = express();

app.set('views', './app/views')

app.set('view engine', 'ejs')

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app)

module.exports = app
