const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  city: String
});

const userSchema = new mongoose.Schema({
  name: String,
  addresses: [addressSchema]
});

module.exports = mongoose.model("User", userSchema);