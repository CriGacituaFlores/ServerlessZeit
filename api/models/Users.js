const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = mongoose.model(
  "User",
  Schema({
    name: String,
    email: String,
    password: String,
    salt: String,
    role: { type: String, default: "user" } // admin
  })
);

module.exports = Users;
