const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const cors = require("cors")
const SpotifyWebApi = require("spotify-web-api-node")

const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
const redirectUri = process.env.SPOTIFY_REDIRECT_URI

const axios = require('axios');

app.use(cors())

app.get("/spotify/token", async (req, res) => {
  const authParameters = {
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,
  };
  
  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: authParameters,
    });
  
    res.json(response.data)

  } catch (error) {
    console.error('Ran into an error:', error);
    res.json({ error: error });
  }  
});

app.post("/spotify/refresh", async (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: redirectUri,
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken,
  })

  try {
    const data = await spotifyApi.refreshAccessToken();
    res.json({
      accessToken: data.body.accessToken,
      expiresIn: data.body.expiresIn,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
})

app.get('/spotify/playlists', async (req, res) => {
  const { token } = req.query
  const { limit } = req.query

  try {
    const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        token,
        limit,
      },
    });
    res.json(response);
  } catch (error) {
    res.send("error")
  }
});


const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
