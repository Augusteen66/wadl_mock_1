var MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose")

var url = "mongodb://127.0.0.1:27017";
const dbName = 'student'

const connectDB = () => {
        MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
        if (err) {
            return console.log("Unable to connect!")
        };

        const db = client.db(dbName)

        return db
    })
}

module.exports = connectDB;