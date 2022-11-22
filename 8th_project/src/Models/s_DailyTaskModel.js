const {Schema, model} = require('mongoose')

const StudentTaskSchema = new Schema({
    Subject: String,
    TodayTopic: {
        type: String,
        default: 'Revision'
    },
    HomeWork: String,
    HomeWorkAssignDate: {
        type: Date,
        default: Date.now()
    },
    HomeWorkSubmitDate: {
        type: String,
    },
    UserName: String

}, {versionKey: false})

const StudentTaskModel = model('tasks', StudentTaskSchema)

module.exports = StudentTaskModel

