const express = require('express');
const mongoose = require('mongoose');
const plates = require('./routes/plates');
const orders = require('./routes/orders');
const app = express()

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//use router in url
app.use('/api/plates', plates)
app.use('/api/orders', orders)


module.exports = app;