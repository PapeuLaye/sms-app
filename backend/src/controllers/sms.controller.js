const axios = require('axios');
const pool = require('../models/db');

exports.sendSMS = async (req, res) => {
  const { token, sender, recipient, message } = req.body;

  // Vérif rapide des inputs
  if (!token || !sender || !recipient || !message) {
    return res.status(400).json({ error: 'Paramètres manquants.' });
  }

  // Format international
  const senderAddress = `tel:+${sender}`;
  const recipientAddress = `tel:+${recipient}`;

  try {
    const url = `${process.env.ORANGE_API_URL}/smsmessaging/v1/outbound/tel%3A%2B${sender}/requests`;

    const response = await axios.post(
      url,
      {
        outboundSMSMessageRequest: {
          address: recipientAddress,
          senderAddress,
          outboundSMSTextMessage: { message }
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Stockage uniquement si succès Orange
    await pool.query(
      'INSERT INTO messages (sender, recipient, message, type, status) VALUES (?, ?, ?, ?, ?)',
      [sender, recipient, message, 'sent', 'success']
    );

    res.json({ success: true, data: response.data });

  } catch (error) {
    // Log et retour du détail pour debug
    console.error(error.response?.data || error.message);

    // Stockage en base si échec
    await pool.query(
      'INSERT INTO messages (sender, recipient, message, type, status) VALUES (?, ?, ?, ?, ?)',
      [sender, recipient, message, 'sent', 'fail']
    );

    res.status(error.response?.status || 500).json({ error: error.response?.data || error.message });
  }
};