import React, { useEffect } from "react"
import getToken from "../api/getToken"
import { Button } from "@mui/material"

const LandingPage = () => {

  const handleTestButton = async () => {
    const token = getToken()
    
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