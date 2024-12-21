const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dob: { type: Date, required: true },
  class: { type: String, required: true },
  attendance: { type: Number, default: 0 },
  testResults: { type: Array, default: [] },
});

module.exports = mongoose.model('Student', studentSchema);
