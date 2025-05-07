const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const clientController = require('../controllers/ClientController');

router.post('/',  clientController.createClient);

router.get('/:id', auth, clientController.getOneClient);

router.put('/:id', auth, clientController.modifyClient);

router.delete('/:id', clientController.deleteClient);

router.get('/', clientController.getAllClients);

module.exports = router;