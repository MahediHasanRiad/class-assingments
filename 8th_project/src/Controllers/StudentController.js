const StudentModel = require("../Models/studentModel")
const jwt = require('jsonwebtoken')
const { json } = require("express")

exports.studentRegister = (req, res) => {

    const query = req.body

    StudentModel.create(query, (err, data) => {
        if(err){
            res.json({massage: 'error', err})
        }else{
            res.json({massage: 'success', data})
        }
    })
}

exports.logInStudent = (req, res) => {
    const username = req.body['UserName']
    const password = req.body['Password']

    StudentModel.find({UserName: username, Password: password}, (err, data) => {
        if(data.length > 0){
            const payload = {
                data: data
            }
            const token = jwt.sign(payload, 'riad123')
            res.json({massage: 'success', data, token})
        }else{
            res.json({massage: 'error', err})
            
        }
    })
}

exports.UpdatePassword = (req, res) => {
    const username = req.headers.username
    const OldPassword = req.headers.password
    const pass = req.body['OldPassword']
    const rePass = req.body['RePassword']
    
    const query = {
        Password: req.body['Password']
    }


    if(query.Password == "" || rePass == ""){
        res.json({massage: 'Fill the password...'})
    }

    if(query.Password !== rePass){
        res.json({massage: "Doesn't match new Password"})
    }
    
    if(OldPassword == pass){

        StudentModel.updateOne({UserName: username}, query, (err, data) => {
            if(data){
                console.log(data)
                res.json({massage: 'success', data})
            }else{
                console.log(password)
                res.json({massage: 'error', err})
            }
        })

    }else{
        res.json({massage: 'old password not match'})
    }
}


exports.openProfile = (req, res) => {
  
    let query = req.headers.username

    StudentModel.find({UserName: query}, (err, data) => {
        if(data){
            res.json({massage: 'success', data})
        }else{
            res.json({massage: 'error', err})
        }
    })
}

exports.updateProfile = (req, res) => {
    const query = req.headers.username

    const update = {
        Name: req.body['Name'],
        Roll: req.body['Roll'],
        Class: req.body['Class'],
        Address: req.body['Address']
    }

    StudentModel.updateOne({UserName: query}, update, (err, data) => {
        if(err){
            res.json({massage: 'failed', err})
        }else{
            res.json({massage: 'success', data})
        }
    })
}