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

  useEffect(() => {
    console.log("first")
  }, [])

  return (
    <>
    <Button onClick={() => handleTestButton}>asd</Button>
    </>
  )
}

export default LandingPage