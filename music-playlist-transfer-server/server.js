// server.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const clientId = process.env.SPOTIFY_CLIENT_ID;

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
    res.json({ message: "Hello from server!" });
})

app.get('/spotify/token', async (req, res) => {
  try {
    // Fetch data from the Spotify API
    const data = await fetch('https://accounts.spotify.com/api/token', authParameters)
    const result = await data.json(data)

    if (res.status === 200) {
      res.json(result);
    }

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: `Server error ${error}` });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
