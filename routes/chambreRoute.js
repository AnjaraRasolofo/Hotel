const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authMiddleware');
const upload = require('../middlewares/upload');

const chambreController = require('../controllers/ChambreController');

router.post('/',  chambreController.createChambre);

router.get('/:id',  chambreController.getOneChambre);

router.put('/:id',  chambreController.modifyChambre);

router.delete('/:id',  chambreController.deleteChambre);

router.get('/',  chambreController.getAllChambres);

router.get('/search', chambreController.searchChambres);

router.post('/upload', chambreController.uploadImage)

module.exports = router;