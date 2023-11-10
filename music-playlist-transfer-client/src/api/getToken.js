import axios from "axios";

const getToken = async () => {
  
  try {
    const response = await axios.get('http://localhost:3000/spotify/access_token')
    const result = response.data
    sessionStorage.setItem("accessToken", result.access_token)
    return result.access_token

  } catch (error) {
    console.log('Ran into an error:', error)
  }
};

export default getToken;
