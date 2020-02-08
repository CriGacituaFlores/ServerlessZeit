const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Meals = mongoose.model('Meal', Schema({
  name: String,
  desc: String
}))

module.exports = Meals;