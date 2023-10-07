import React, { useEffect } from "react"
import getToken from "../api/getToken"
import { Button } from "@mui/material"

const LandingPage = () => {

  useEffect(() => {
    console.log("first")
  }, [])

  return (
    <>
    <Button onClick={() => getToken()}>asd</Button>
    </>
  )
}

export default LandingPage