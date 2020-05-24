const express = require("express");
const mongoose = require("mongoose");
require('dotenv/config');

const app = express();

//middlewares in express
//---- functions that execute

app.use("/post", () => {
  console.log("This is a middleware running");
});

//ROUTES

app.get("/", (req, res) => {
  res.send("We are on home - page");
});
app.get("/post", (req, res) => {
  res.send("We are on home - post");
});

//connect to DB


const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  //CHECK if datatbase is connected to server
  console.log('connected to DB!')
  // perform actions on the collection object
  client.close();
});



//HOW DO WE START LISTENNING TO THE SERVER
app.listen(4000);


