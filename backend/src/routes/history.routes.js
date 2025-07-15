const express = require('express');
const router = express.Router();
const historyController = require('../controllers/history.controller');

// Récupérer l'historique des messages
router.get('/', historyController.getHistory);

module.exports = router;