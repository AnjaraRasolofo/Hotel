const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const reservationController = require('../controllers/ReservationController');

router.post('/', reservationController.createReservation);

router.get('/:id', reservationController.getOneReservation);

router.put('/:id', auth, reservationController.modifyReservation);

router.delete('/:id', auth, reservationController.deleteReservation);

router.get('/', reservationController.getAllReservations);

module.exports = router;