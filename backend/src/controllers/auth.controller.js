const axios = require('axios');

exports.getToken = async (req, res) => {
  const client_id = process.env.ORANGE_API_CLIENT_ID;
  const client_secret = process.env.ORANGE_API_CLIENT_SECRET;

  if (!client_id || !client_secret) {
    return res.status(400).json({ error: "client_id and client_secret are required" });
  }

  try {
    const response = await axios.post(
      `${process.env.ORANGE_API_URL}/oauth/v3/token`,
      'grant_type=client_credentials',
      {
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    // Log détaillé
    console.error('Erreur Orange:', {
      status: error.response?.status,
      headers: error.response?.headers,
      data: error.response?.data,
      message: error.message,
    });

    res.status(error.response?.status || 500).json({
      error: error.response?.data || error.message
    });
  }
};