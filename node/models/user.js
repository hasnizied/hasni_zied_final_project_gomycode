const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,
  salary: Number,
  gender: String,
  status: String,
});

module.exports = mongoose.model("user", schema);
