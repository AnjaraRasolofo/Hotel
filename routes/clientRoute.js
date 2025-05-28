const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authMiddleware');

const clientController = require('../controllers/ClientController');

router.post('/',  clientController.createClient);

router.get('/:name', clientController.searchClientByName);

router.get('/:id', clientController.getOneClient);

router.put('/:id', auth, clientController.modifyClient);

router.delete('/:id', clientController.deleteClient);

router.get('/', clientController.getAllClients);

module.exports = router;