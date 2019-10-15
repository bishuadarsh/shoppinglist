var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

const route = require('./route/routes.js'); //reference to location of router file

mongoose.connect('mongodb://localhost:27017/shoppinglist');
mongoose.connection.on('connected',() => {
    console.log("Connected to MongoDB");
});
mongoose.connection.on('error',(err) => {
    console.log(err);
});

const PORT = 3000;

app.use(cors()); //middleware-1

app.use(bodyparser.json()); //middleware-2

app.use('/api',route); //middleware-3

app.get('/',(req,res) => {
    console.log("Adarsh i am here dude !");
});
app.listen(PORT,() => {
    console.log("Server started at port : "+PORT);
});