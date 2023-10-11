// server.js
const express = require('express');
const app = express();
const dotenv = require('dotenv').config()

const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
console.log("CLIENT SECRET", clientSecret)

const clientId = process.env.SPOTIFY_CLIENT_ID;
console.log("CLIENT ID", clientId)

app.use(express.json());

// PARAMS
const authParameters = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        // 'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
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
    console.log("DATA!!!!", data)
    const result = await data.json(data)
    console.log("RESULT!!", result)

    if (res.status === 200) {
    //   const data = await res.json();
      res.json(result);
    }
  } catch (error) {
    console.error('Ran into an error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
