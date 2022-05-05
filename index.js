const express = require('express')
const MongoClient = require('mongodb').MongoClient;


const app = express()

const mongoose = require('mongoose')
const MONGO_USERNAME = 'admin';
const MONGO_PASSWORD = 'admin';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'MyDb';
const { response } = require('express')
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
app.use(express.json())
let str = 'hello world'


const start = async () => {
    try {
        await mongoose.connect(url)
        .then( () => console.log('mongo connection'))
        app.listen(3001, () => {
            console.log('server started');
            
        })
    } catch (error) {
        
    }
}

start()
