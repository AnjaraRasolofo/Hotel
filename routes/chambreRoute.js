const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const chambreController = require('../controllers/ChambreController');

router.post('/', auth, chambreController.createChambre);

router.get('/:id', auth, chambreController.getOneChambre);

router.put('/:id', auth, chambreController.modifyChambre);

router.delete('/:id', auth, chambreController.deleteChambre);

router.get('/', auth, chambreController.getAllChambres);

module.exports = router;