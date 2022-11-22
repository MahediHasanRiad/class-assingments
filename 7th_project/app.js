const express = require('express')
const mongoose = require('mongoose')
const routers = require('./src/Routers/StudentRouters')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/students', routers)



const url = 'mongodb://localhost:27017/practice'

mongoose.connect(url, () => {
    console.log('mongoose Connection success')
})


module.exports = app

