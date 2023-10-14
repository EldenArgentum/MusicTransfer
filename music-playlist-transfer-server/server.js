const express = require('express');
const app = express();
const dotenv = require('dotenv').config()

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

app.get('/spotify/token', async (req, res) => {

  const authParameters = {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret
  }

  try {
    const data = await fetch('https://accounts.spotify.com/api/token', authParameters)
    const result = await data.json()
    res.json(result)

  } catch (error) {
    console.error('Ran into an error:', error)
    res.json({ error: error })
  }
});

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
