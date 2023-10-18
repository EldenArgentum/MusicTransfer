import React from "react"
import SpotifyAuth from "../components/spotifyAuth"


const LandingPage = () => {
  // TODO:
  // IF code EXISTS, RENDER THE INFO AND EVERYTHING.
  // IF code NOT EXISTS, RENDER THE SpotifyAuth COMPONENT TO GET CODE.
  // REPLICATE FOR SPOTIFY, YOUTUBE, etc.
  const code = URLSearchParams()

  return (
    <>
      <SpotifyAuth />
    </>
  )
}

export default LandingPage