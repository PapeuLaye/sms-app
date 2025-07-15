const pool = require('../models/db');

exports.receiveSMS = async (req, res) => {
  const { sender, message } = req.body; // Adapter selon le format reçu de l'API Orange
  try {
    await pool.query(
      'INSERT INTO messages (sender, message, type, status) VALUES (?, ?, ?, ?)',
      [sender, message, 'received', 'received']
    );
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};