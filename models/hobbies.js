const mongoose = require("mongoose");

const hobbySchema = new mongoose.Schema({
  name: String,
  hobby: String
});

module.exports = mongoose.model("Hobby", hobbySchema)
