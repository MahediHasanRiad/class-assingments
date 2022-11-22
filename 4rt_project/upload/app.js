// const router = require('./src/router/router')
const express = require('express')
const path = require("path")
const app = express()
const multer = require('multer')
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

let storage = multer.diskStorage({
    destination: (req, file, callback) => {
         callback(null, './files')  
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

let upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, cb){
    
        // Set the filetypes, it is optional
        var filetypes = /png|jpg/;
        var mimetype = filetypes.test(file.mimetype);
  
        var extname = filetypes.test(path.extname(
                    file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        }
      
        cb("Error: File upload only supports the "
                + "following filetypes - " + filetypes);
      } 
  
// mypic is the name of file attribute
}).single('myfile')

app.post('/',(req, res) => {
        upload(req, res, (error) => {
            if(error){
                res.send('Faild')
            }else{
                res.end('Success')
            }
        })
})
module.exports = app
