import axios from "axios";

const getPlaylists = async (token) => {

  try {
    const response = await axios.get(`http://localhost:3000/spotify/playlists?access_token=${token}`)
    return response.data.items
  }
  catch (error) {
    console.error('Ran into an error:', error)
  }
}

export default getPlaylists