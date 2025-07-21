const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  bloodgroup: String
});

module.exports = mongoose.model('Student', studentSchema);
