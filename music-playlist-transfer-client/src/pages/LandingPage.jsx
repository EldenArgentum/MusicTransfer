import React, { useEffect } from "react"
import { Button } from "@mui/material"
import spotifyAuth from "../api/spotifyAuth"

const LandingPage = () => {

  const auth_url = `https://accounts.spotify.com/authorize?client_id=c90c3b38e4c24b2ab321e17d15c507a6&response_type=code&redirect_uri=http://localhost:5173/&scope=playlist-read-private
  %20playlist-read-collaborative
  %20playlist-modify-private
  %20playlist-modify-public
  %20user-library-modify
  %20user-library-read
  %20user-read-email
  %20user-read-private
  `

  return (
    <>
    <Button onClick={() => spotifyAuth()} variant={"outlined"}>asd</Button>
    <a href={auth_url}>Dawg!</a>
    </>
  )
}

export default LandingPage