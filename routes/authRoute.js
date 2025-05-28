const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/inscription', authController.inscription);
router.post('/connexion', authController.connexion);

router.get('/profile', authMiddleware, (req, res) => {
    res.json({ message: `Bienvenue ${req.user.email}` });
});

module.exports = router;