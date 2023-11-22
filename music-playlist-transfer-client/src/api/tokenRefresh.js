import axios from "axios";

const tokenRefresh = async (refreshToken) => {
  try {
    const response = await axios.get(`http://localhost:3000/spotify/refresh_token?refresh_token=${refreshToken}`)
    const result = response.data
    const resultObj = {'accessToken' : result.access_token, 'refreshToken' : result.refresh_token}
    console.log(resultObj)
    return resultObj
    
  } catch (error) {
    console.log('Ran into an error:', error)
  }
}

export default tokenRefresh