const mongoose = require('mongoose');

const indisponibiliteSchema = new mongoose.Schema({
  chambreId: { type: Number, required: true },
  date: { type: Date, required: true },
  motif: { type: String, required: true },
});

module.exports = mongoose.model('Indisponibilite', indisponibiliteSchema);