import axios from "axios";

const getToken = async () => {
  
  try {
    const response = await axios.get('http://localhost:3000/spotify/token')
    const result = response.data
    return result.access_token
    
  } catch (error) {
    console.log('Ran into an error:', error)
  }
};

export default getToken;
