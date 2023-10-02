import React, { useEffect } from "react"
import APIController from "../api/APIController"

const LandingPage = () => {

  useEffect(() => {
    APIController()
  }, [])

  return (
    <>
    </>
  )
}

export default LandingPage