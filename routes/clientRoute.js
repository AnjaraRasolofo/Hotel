const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const clientController = require('../controllers/ClientController');

router.post('/', auth, clientController.createClient);

router.get('/:id', auth, clientController.getOneClient);

router.put('/:id', auth, clientController.modifyClient);

router.delete('/:id', auth, clientController.deleteClient);

router.get('/', auth, clientController.getAllClient);

module.exports = router;