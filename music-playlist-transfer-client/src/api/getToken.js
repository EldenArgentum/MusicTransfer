import axios from "axios";

const getToken = async (code) => {
  try {
    const response = await axios.get(`http://localhost:3000/spotify/access_token?code=${code}`)
    const result = response.data
    console.log(result)
    sessionStorage.setItem("accessToken", result.access_token)
    sessionStorage.setItem("refreshToken", result.refresh_token)
    return result.access_token

  } catch (error) {
    console.log('Ran into an error:', error)
  }
};

export default getToken;