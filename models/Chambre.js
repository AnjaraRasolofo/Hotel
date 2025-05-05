// models/Room.js
const mongoose = require('mongoose');

const chambreSchema = new mongoose.Schema({
  nom: String,
  description: String,
  prix_par_nuit: Number,
  capacite: Number,
  photo: String
  /*availableDates: [Date],*/
});

module.exports = mongoose.model('Chambre', chambreSchema);