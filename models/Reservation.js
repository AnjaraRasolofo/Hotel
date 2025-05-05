// models/Booking.js
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  chambreId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chambre', required: true },
  dateDebut: Date,
  dateFin: Date,
  status: String,
  montant: Number
});

module.exports = mongoose.model('Reservation', reservationSchema);