const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const cors = require("cors")

const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
const redirectUri = process.env.SPOTIFY_REDIRECT_URI

const axios = require("axios")

app.use(cors())

app.get("/spotify/access_token", async (req, res) => {
	const code = req.query.code

	const authParameters = {
		code: code,
		redirect_uri: "http://localhost:5173/",
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
						new Buffer.from(clientId + ":" + clientSecret).toString("base64"),
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
						new Buffer.from(clientId + ":" + clientSecret).toString("base64"),
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
		res.send("error")
	}
})

const PORT = 3000
app.listen(PORT, () => {
	console.log(`Server is running on port ↪ ${PORT} ↩`)
})
