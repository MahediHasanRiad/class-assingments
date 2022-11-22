const routers = require('./src/router/allroute')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})


const  cors = require('cors')
const  mongoSanitize  = require('express-mongo-sanitize')
const  rateLimit  = require('express-rate-limit')
const  helmet  = require('helmet')
const  hpp  = require('hpp')

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	max: 200
})

app.use(cors())
app.use(limiter)
app.use(mongoSanitize())
app.use(helmet())
app.use(hpp())



app.use('/downloads', routers)

app.get('/image', (req, res) => {
    res.download('./img/favicon.png')
})
app.get('/', (req, res) => {
    res.send('this is home')
})

app.use('*', (req, res) => {
    res.send('try another pat')
})


module.exports = app