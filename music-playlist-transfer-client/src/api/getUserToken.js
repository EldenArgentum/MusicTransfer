import axios from "axios";

const getUserToken = async (code) => {

  try {
    const response = await axios.get(`http://localhost:3000/spotify/user_token?code=${code}`)
    const result = response.data
    sessionStorage.setItem("userToken", result.access_token)
    return result.access_token
  } catch (error) {
    console.log('Ran into an error:', error)
  }
};

export default getUserToken;
