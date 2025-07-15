const express = require('express');
const router = express.Router();
const smsController = require('../controllers/sms.controller');

// Route pour envoyer un SMS
router.post('/send', smsController.sendSMS);

module.exports = router;