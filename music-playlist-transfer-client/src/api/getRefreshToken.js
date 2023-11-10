import axios from "axios";

const getRefreshToken = async (refreshToken) => {
  try {
    const response = await axios.get(`http://localhost:3000/spotify/refresh_token?refresh_token=${refreshToken}`)
    const result = response.data
    sessionStorage.setItem("refreshToken", result.refresh_token)
    sessionStorage.setItem("userToken", result.access_token)
    return result.access_token
  } catch (error) {
    console.log('Ran into an error:', error)
  }
}

export default getRefreshToken