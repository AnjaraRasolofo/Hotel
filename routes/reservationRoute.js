const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const reservationController = require('../controllers/ReservationController');

router.post('/', auth, reservationController.createReservation);

router.get('/:id', auth, reservationController.getOneReservation);

router.put('/:id', auth, reservationController.modifyReservation);

router.delete('/:id', auth, reservationController.deleteReservation);

router.get('/', auth, reservationController.getAllReservation);

module.exports = router;