import React, { useEffect } from "react"
import { Button } from "@mui/material"


const LandingPage = () => {

  const pleaseWork = async () => {
    const data = await fetch('http://localhost:3000/spotify/token')
    const result = await data.json()
    return result.access_token
  }

  return (
    <>
    {/* <Button onClick={() => getToken()} variant={"outlined"}>asd</Button> */}
    <Button onClick={() => pleaseWork()} variant={"outlined"}>asd</Button>
    </>
  )
}

export default LandingPage