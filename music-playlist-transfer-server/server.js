// server.js
const express = require('express');
const app = express();
const dotenv = require('dotenv').config()

const clientSecret = 'c90c3b38e4c24b2ab321e17d15c507a6' // process.env.SPOTIFY_CLIENT_SECRET;
const clientId = '0c1794d1de5c480ea44501166d517719' // process.env.SPOTIFY_CLIENT_ID;

app.use(express.json());

// PARAMS
const authParameters = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret
}

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" })
})

app.get('/spotify/token', async (req, res) => {

  try {
    // Fetch data from the Spotify APIa
    const data = await fetch('https://accounts.spotify.com/api/token', authParameters)
    console.log("DATA!!!!", data)
    console.log("RESULT!!", res)
    res.json(await data.json())

  } catch (error) {
    console.error('Ran into an error:', error)
    res.status(500).json({ error: 'Server error' })
  }
});

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
