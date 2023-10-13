import React, { useEffect } from "react"
import getToken from "../api/getToken"
import { Button } from "@mui/material"

const LandingPage = () => {

  return (
    <>
    <Button onClick={() => getToken()} variant={"outlined"}>asd</Button>
    </>
  )
}

export default LandingPage