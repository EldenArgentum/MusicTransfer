import React, { useEffect, useState } from 'react'
import getPlaylists from '../api/getPlaylists'
import { Button, setRef } from '@mui/material'
import tokenRefresh from '../api/tokenRefresh'
import getToken from '../api/getToken'
import isNil from 'lodash'


const SpotifySection = () => {
    
    const code = sessionStorage.getItem("code")
    const [accessToken, setAccessToken] = useState("")

    useEffect(() => {
      console.log(code)
    }, [])
    

    const handleClickButton = async () => {
        if(isNil(sessionStorage.getItem("refreshToken"))) {
            const token = await getToken(code)
            console.log("if", token)
            setAccessToken(token)
        }
        else {
            const refreshToken = sessionStorage.getItem("refreshToken")
            const token = await tokenRefresh(refreshToken)
            console.log("else", token)
            setAccessToken(token)
        }
        // const userToken = await getToken(code)
        const retrievedPlaylists = await getPlaylists(accessToken)
        console.log("retrievedPlaylists",retrievedPlaylists)
        retrievedPlaylists.map(playlist => ({
        }))
        // const playlists = await getPlaylists(token)
    }

    return ( 
    <div>
    <Button onClick={() => handleClickButton()} variant='outlined'> Load the playlists! </Button>
    </div>
    )
}

export default SpotifySection