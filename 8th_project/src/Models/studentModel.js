const {Schema, model} = require('mongoose')

const StudentSchema = new Schema({
    Name: String,
    Roll: Number,
    Class: String,
    Address: String,
    Admission: {
        type: Date
    },
    Mobile: {
        type: Number,
        validate: {
            validator: function(value){
                if(value.length !== 11){
                    return false
                }else{
                    return true
                }
            },
           
        }
    },
    UserName: {
        type: String,
        unique: true
    },
    Password: {
        type: String
    },
    OldPassword: {
        type: String
    },
    RePassword: {
        type: String
    }
    
}, {versionKey: false})

const StudentModel = model('practices', StudentSchema)

module.exports = StudentModel