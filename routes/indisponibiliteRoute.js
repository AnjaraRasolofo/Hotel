const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authMiddleware');

const indisponibiliteController = require('../controllers/IndisponibiliteController');

router.post('/', auth, indisponibiliteController.createIndisponibilite);

router.get('/:id', auth, indisponibiliteController.getOneIndisponibilite);

router.put('/:id', auth, indisponibiliteController.modifyIndisponibilite);

router.delete('/:id', auth, indisponibiliteController.deleteIndisponibilite);

router.get('/', auth, indisponibiliteController.getAllIndisponibilites);

module.exports = router;