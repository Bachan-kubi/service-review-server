// step-1

const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;

// 2.0
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

require('dotenv').config();
// 01

//2- midddleware
app.use(cors());
app.use(express.json());

// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASSWORD);


// mongodb-3



// const uri = "mongodb+srv://<username>:<password>@cluster0.lhptd0u.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



