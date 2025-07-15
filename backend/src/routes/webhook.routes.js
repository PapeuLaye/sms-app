const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhook.controller');

// Réception des SMS (callback webhook)
router.post('/sms', webhookController.receiveSMS);

module.exports = router;