const express = require('express')
const MongoClient = require('mongodb').MongoClient;


const app = express()

const mongoose = require('mongoose')
const { response } = require('express')
app.use(express.json())



const start = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/MyDb")
        .then( () => console.log('mongo connection'))
        app.listen(3001, () => {
            console.log('server started');
            
        })
    } catch (error) {
        
    }
}

start()