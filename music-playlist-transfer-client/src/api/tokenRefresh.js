import axios from "axios";

const tokenRefresh = async (refreshToken) => {
  try {
    const response = await axios.get(`http://localhost:3000/spotify/refresh_token?refresh_token=${refreshToken}`)
    const result = response.data
    sessionStorage.setItem("accessToken", result.access_token)
    sessionStorage.setItem("refreshToken", result.refresh_token)
    return result.access_token

  } catch (error) {
    console.log('Ran into an error:', error)
  }
}

export default tokenRefresh