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



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lhptd0u.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//1 jwt 
function verifyJWT(req, res, next){
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).send({message: 'Unauthorized Access!'})
    }
    const token = authHeader.split(' ')[1];
    console.log(process.env.ACCESS_TOKEN_SECRET);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function(err, decoded){
        if(err){
            return res.status(401).send({message: 'Unauthorized Access!'})
        }
        req.decoded = decoded;
        next();
    })
}
// 3.1
async function run(){
    // 3.3
    try{
        // 3.5
        const serviceCollection = client.db('superCar').collection('service');
        // order collection
        const ordersCollection = client.db('superCar').collection('orders');
        
        // jwt 
        app.post('/jwt', (req, res)=>{
            const user = req.body;
            // console.log(user);
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '10h'});
            res.send({token});

        })






// 1 step
app.get('/', (req, res)=>{
    res.send('Experst Cars Websites!')
});

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})
// 1 steop fininshed.
