const express = require('express');
const mongoose = require('mongoose');
const meals = require('./routes/meals');
const orders = require('./routes/orders');
const app = express()

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//use router in url
app.use('/api/meals', meals)
app.use('/api/orders', orders)


module.exports = app;