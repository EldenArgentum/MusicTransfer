import axios from "axios";
import getToken from "./getToken";

const getPlaylists = async (token) => {

  // const token = await getToken(); // Replace with your Spotify access token
  const limit = 50
  
  try {
  const playlists = await axios.get(`http://localhost:3000/spotify/playlists`, {
    params: {
      token: token,
      limit: limit
    }
  })
  console.log(playlists)
  return playlists
}
  catch (error) {
    console.log("ERROR",error)
  }

  

  // try {
  //   const response = await axios.get(`https://api.spotify.com/v1/me/playlists`, {
  //     params: {
  //       limit: limit,
  //     },
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //     },
  //   });
  //   console.log("response", response)
  //   console.log("response.data.playlist.items", response.data.playlist.items)
  //   return response.data.playlists.items

  // } catch (error) {
  //   console.error('Ran into an error:', error)
  //   throw error
  // }

}

export default getPlaylists