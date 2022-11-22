let routers = require('express').Router()
let image = require('../controlar/allcontrolars')

routers.get('/photo', image.photo)
routers.get('/personal', image.personal)
routers.get('/profetional', image.profetional)

module.exports = routers