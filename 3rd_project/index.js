const mongoClient = require('mongodb').MongoClient
const workerData = require('./officeData')

const url = 'mongodb://127.0.0.1:27017/'

mongoClient.connect(url, (err, myDatabase) => {
    if(err){
        console.log('faild')
    }else{
        console.log('success')
          insrtData(myDatabase)
        //  findSalary(myDatabase)
        // updateSalary(myDatabase)
        // deleteSalary(myDatabase)
    }
})

// insert data
function insrtData(myDatabase){
    const database = myDatabase.db('office')
    const collection = database.collection('employ')

    collection.insertMany(workerData, (err, data) => {
        if(err){
            console.log('insert erron')
        }else{
            console.log('insert success')
        }
    })
}


// find manager details
function findSalary(myDatabase){
    const database = myDatabase.db('office')
    const collection = database.collection('employ')

    // const person = {position: 'Manager'}
    collection.findOne(person, (err, data) => {
        if(err){
            console.log('find err')
        }else{
            console.log(data)
        }
    })

}

// update manager Salary
function updateSalary(myDatabase){
    const database = myDatabase.db('office')
    const collection = database.collection('employ')

    const person = {position: 'Manager'}
    const setValue = {$set: {salary: "00001"}}

    collection.updateOne(person, setValue, (err, data) => {
        if(err){
            console.log('update err')
        }else{
            console.log(data)
        }
    })
}


// delete one data 
function deleteSalary(myDatabase){
    const database = myDatabase.db('office')
    const collection = database.collection('employ')

    const person = {name: 'Shamim'}

    collection.deleteOne(person, (err, data) => {
        if(err){
            console.log('delete err')
        }else{
            console.log(data)
        }
    })
}
