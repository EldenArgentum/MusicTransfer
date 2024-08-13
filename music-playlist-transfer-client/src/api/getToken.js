import axios from "axios"
import tokenRefresh from "./tokenRefresh"

const getToken = async (code) => {
	try {
		// if refresh token is in storage... then do the stuff.
		if (
			sessionStorage.getItem("refreshToken") !== "undefined" &&
			sessionStorage.getItem("refreshToken")
		) {
			const refreshToken = sessionStorage.getItem("refreshToken")
			return tokenRefresh(refreshToken)
		} else {
			const response = await axios.get(
				`http://localhost:3000/spotify/access_token?code=${code}`
			)
			const result = response.data
			const resultObj = {
				accessToken: result.access_token,
				refreshToken: result.refresh_token,
			}
			sessionStorage.setItem("refreshToken", resultObj.refreshToken)
			return resultObj
		}
	} catch (error) {
		console.error("Ran into an error:", error)
	}
}

export default getToken
