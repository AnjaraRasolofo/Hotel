// models/Room.js
const mongoose = require('mongoose');

const chambreSchema = new mongoose.Schema({
  
  nom: String,
  description: String,
  prix_par_nuit: Number,
  capacite: Number,
  image: String,
  type: String, // single, double, suite, standard, familiale, dortoir
  disponible: {type: Boolean, default: true},
  equipements: [String],
  reservations: [
    {
      dateDebut: Date,
      dateFin: Date,
    }
  ]

});

module.exports = mongoose.model('Chambre', chambreSchema);