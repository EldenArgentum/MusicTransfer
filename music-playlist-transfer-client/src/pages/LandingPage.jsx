import React, { useEffect } from "react"
import getToken from "../api/getToken"
import { Button } from "@mui/material"

const LandingPage = () => {

  const handleTestButton = async () => {
    console.log("kdfjlgnsdfng")
    const token = await getToken()
    console.log(token)
    return token
  }

  return (
    <>
    <Button onClick={() => handleTestButton()} variant={"outlined"}>asd</Button>
    </>
  )
}

export default LandingPage