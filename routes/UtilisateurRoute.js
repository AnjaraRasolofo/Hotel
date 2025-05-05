const express = require('express');
const router = express.Router();

const utilisateurController = require('../controllers/UtilisateurController');

router.post('/inscription', utilisateurController.signup);
router.post('/connexion', utilisateurController.login);

module.exports = router;