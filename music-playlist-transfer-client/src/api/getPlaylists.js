import axios from "axios";

const getPlaylists = async (userToken) => {

  try {
    const response = await axios.get(`http://localhost:3000/spotify/playlists?user_token=${userToken}`)
    console.log(response.data.items)
    return response.data.items
  }
  catch (error) {
    console.log('Ran into an error:', error)
  }
}

export default getPlaylists