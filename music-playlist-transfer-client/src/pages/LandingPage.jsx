import { useEffect } from "react"
import SpotifyAuth from "../components/SpotifyAuth"
import SpotifySection from "../components/SpotifySection"


const LandingPage = () => {


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