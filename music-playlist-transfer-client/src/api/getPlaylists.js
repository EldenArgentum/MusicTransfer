import axios from "axios";

const getPlaylists = async (token) => {

//   const response = await axios.get("http://localhost:3000/spotify/playlists", {
//     params: {
//       token: token,
//       limit: 50
//     }
//   })
//   console.log(response.data)
//   return response.data

// }

const data = await axios.get(
  "https://api.spotify.com/v1/me/top/tracks?limit=50",
  {
    headers: {
      Authorization: "Bearer " + {token},
    },
  }
);
}
export default getPlaylists