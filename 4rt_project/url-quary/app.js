const express = require('express')
const app = express()
const information = require('./src/routers/routers')

const  cors = require('cors')
const  mongoSanitize  = require('express-mongo-sanitize')
const  rateLimit  = require('express-rate-limit')
const  helmet  = require('helmet')
const  hpp  = require('hpp')


const multerObj = require('multer')
const multer = multerObj()

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	max: 200
})

const env = require('dotenv')
env.config({path: './config.env'})


app.use(multer.array())
app.use(express.static('public'))

app.use(cors())
app.use(limiter)
app.use(mongoSanitize())
app.use(helmet())
app.use(hpp())


app.use('/info', information)

app.use('*', (req, res) => {
    res.status(404).json({status: "Faild", massage: "Try another path"})
})


module.exports = app