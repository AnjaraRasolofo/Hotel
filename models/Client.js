// models/Client.js
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true },
  cin: { type: String, required: true, unique: true },
  telephone: String
});

module.exports = mongoose.model('Client', clientSchema);