const express = require('express').Router()
const routeControler = require('../controlers/routeControler')

express.get('/about', routeControler.about)
express.post('/form', routeControler.form)

module.exports = express