import axios from "axios";

const tokenRefresh = async (refreshToken) => {
  try {
    console.log("tokenRefresh func...")
    const response = await axios.get(`http://localhost:3000/spotify/refresh_token?refresh_token=${refreshToken}`)
    const result = response.data
    console.log("tokenRefresh.js...",result)
    const resultObj = {'accessToken' : result.access_token, 'refreshToken' : result.refresh_token}
    return resultObj
    
  } catch (error) {
    console.log('Ran into an error:', error)
  }
}

export default tokenRefresh