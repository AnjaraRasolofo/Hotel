// models/Room.js
const mongoose = require('mongoose');

const chambreSchema = new mongoose.Schema({
  nom: String,
  description: String,
  prix_par_nuit: Number,
  capacite: Number,
  photo: String,
  type: String, // Suite, Standard, Familiale, 
  disponible: {type: Boolean, default: true},
  equipements: [String]
});

module.exports = mongoose.model('Chambre', chambreSchema);