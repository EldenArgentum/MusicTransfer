import { useEffect } from "react"
import SpotifyAuth from "../components/SpotifyAuth"
import getToken from "../api/getToken"
import { Button } from "@mui/material"
import SpotifySection from "../components/spotifySection"


const LandingPage = () => {
  // TODO:
  // IF code FOR YOUTUBE/SPOTIFY, etc. EXISTS, RENDER THE INFO AND EVERYTHING.
  // IF code NOT EXISTS, RENDER THE SpotifyAuth COMPONENT TO GET CODE.
  // REPLICATE FOR SPOTIFY, YOUTUBE, etc.

  const handleGetToken = async () => {
    const token = await getToken()
  }

  const code = new URLSearchParams(document.location.search).get('code')

  return (
    <div>
      <Button variant="outlined" onClick={() => handleGetToken()}>Get Token Button</Button>
      {code ? <SpotifySection /> : <SpotifyAuth /> }
    </div>
  )
}

export default LandingPage