import { useEffect } from "react"
import SpotifyAuth from "../components/SpotifyAuth"
import SpotifySection from "../components/SpotifySection"
import { useToken, useSetToken, useSetCount, useCount } from '../context/GlobalContext'


const LandingPage = () => {
  // TODO:
  // IF code FOR YOUTUBE/SPOTIFY, etc. EXISTS, RENDER THE INFO AND EVERYTHING.
  // IF code NOT EXISTS, RENDER THE SpotifyAuth COMPONENT TO GET CODE.
  // REPLICATE FOR SPOTIFY, YOUTUBE, etc.

  const code = new URLSearchParams(document.location.search).get('code')  
  
  useEffect(() => {
    sessionStorage.setItem("code", code)
  }, [])
  

  return (
    <div>
      {code ? <SpotifySection /> : <SpotifyAuth /> }

    </div>
  )
}

export default LandingPage