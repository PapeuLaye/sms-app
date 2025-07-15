require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import des routes
const smsRoutes = require('./routes/sms.routes');
const authRoutes = require('./routes/auth.routes');
const webhookRoutes = require('./routes/webhook.routes');
const historyRoutes = require('./routes/history.routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Utilisation des routes
app.use('/api/sms', smsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/webhook', webhookRoutes);
app.use('/api/history', historyRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('SMS Platform backend is running!');
});

module.exports = app; // ⬅️ Export de app, plus de app.listen ici !