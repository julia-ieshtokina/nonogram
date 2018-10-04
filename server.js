
const express = require('express');
const app = express();
const fs = require('fs');

const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/nonogram');

// const grids = new mongoose.Schema({
//  name: String,
//  grid: Array
// });

// var Grids = mongoose.model("Grids", grids);

app.use(express.static('./' )); //serves the index.html

// app.use(bodyParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(3000, () => {
 console.log('Listening on port 3000');
});

module.exports = app;
