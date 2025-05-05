// models/Room.js
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  availableDates: [Date],
});

module.exports = mongoose.model('Room', roomSchema);