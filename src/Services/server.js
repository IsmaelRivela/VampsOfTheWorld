const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/instagram-auth', async (req, res) => {
  const { code } = req.query;
  const appId = '7507129022746105';
  const appSecret = '9a6dc08bc500bf9738a9cbaea22074b2';
  const redirectUri = 'https://vamps-of-the-world.vercel.app/';

  try {
    const response = await axios.post('https://api.instagram.com/oauth/access_token', {
      client_id: appId,
      client_secret: appSecret,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
      code: code,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log('Proxy server running on http://localhost:5000');
});