const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const cors = require("cors")

// SPOTIFY
const spotifyClientId = process.env.SPOTIFY_CLIENT_ID
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET
const spotifyRedirectUri = process.env.SPOTIFY_REDIRECT_URI

// YT
const youtubeClientId = process.env.YOUTUBE_CLIENT_ID
const youtubeClientSecret = process.env.YOUTUBE_CLIENT_SECRET


const axios = require("axios")

app.use(cors())

//
// SPOTIFY
//

app.get("/spotify/access_token", async (req, res) => {
	const code = req.query.code

	const authParameters = {
		code: code,
		redirect_uri: spotifyRedirectUri,
		grant_type: "authorization_code",
	}

	try {
		const response = await axios.post(
			"https://accounts.spotify.com/api/token",
			null,
			{
				headers: {
					"content-type": "application/x-www-form-urlencoded",
					Authorization:
						"Basic " +
						new Buffer.from(spotifyClientId + ":" + spotifyClientSecret).toString("base64"),
				},
				params: authParameters,
			}
		)

		res.json(response.data)
	} catch (error) {
		console.error("Ran into an error on /access_token:", error)
		res.json({ error: error.message })
	}
})

app.get("/spotify/refresh_token", async (req, res) => {
	const refreshToken = req.query.refresh_token

	const authParameters = {
		refresh_token: refreshToken,
		grant_type: "refresh_token",
	}

	try {
		const response = await axios.post(
			"https://accounts.spotify.com/api/token",
			null,
			{
				headers: {
					"content-type": "application/x-www-form-urlencoded",
					Authorization:
						"Basic " +
						new Buffer.from(spotifyClientId + ":" + spotifyClientSecret).toString("base64"),
				},
				params: authParameters,
			}
		)

		res.json(response.data)
	} catch (error) {
		console.error("Ran into an error on refresh_token:", error.response.data)
		res.json({ error: error.message })
	}
})

app.get("/spotify/playlists", async (req, res) => {
	const accessToken = req.query.access_token

	try {
		const response = await axios.get(
			"https://api.spotify.com/v1/me/playlists",
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
				params: {
					token: accessToken,
					limit: 50,
				},
			}
		)
		res.json(response.data)
	} catch (error) {
		console.error(
			"Ran into an error on fetching playlists:",
			error.response.data
		)
		res.json({ error: error.message })
	}
})

//
// YOUTUBE
//

app.get('/callback', async (req, res) => {
	const code = req.query.code;
  
	try {
	  const response = await axios.post(
		'https://oauth2.googleapis.com/token',
		qs.stringify({
		  code,
		  client_id: CLIENT_ID,
		  client_secret: CLIENT_SECRET,
		  redirect_uri: REDIRECT_URI,
		  grant_type: 'authorization_code',
		}),
		{
		  headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		  },
		}
	  );
  
	  const { access_token, refresh_token } = response.data;
  
	  // Save tokens securely (e.g., in a database or in session storage)
	  // Redirect the user to a success page or wherever you want
  
	  res.json({ access_token, refresh_token });
	} catch (error) {
	  console.error('Error exchanging code for token:', error);
	  res.status(500).send('Error during OAuth flow');
	}
  });

const PORT = 3000
app.listen(PORT, () => {
	console.log(`Server is running on port ↪ ${PORT} ↩`)
})
