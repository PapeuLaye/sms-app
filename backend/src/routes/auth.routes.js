const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Route pour obtenir un token OAuth2
router.post('/token', authController.getToken);

module.exports = router;