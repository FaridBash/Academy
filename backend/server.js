const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const colors = require('colors');
const path = require('path');
const cors = require('cors');
const http = require('http');
// const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 2005;
// const myPath = path.join(__dirname, '../GetGuide/dist');
// console.log(myPath);

// app.use(express.static(myPath));
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
// app.use(errorHandler);



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });