import React, { useEffect, useState } from 'react'
import getPlaylists from '../api/getPlaylists'
import { Button, setRef } from '@mui/material'
import tokenRefresh from '../api/tokenRefresh'
import getToken from '../api/getToken'
import isNil from 'lodash'
import isEmpty from 'lodash'



const SpotifySection = ({ code }) => {
    

    // const [code, setCode] = useState(code)
    const [accessToken, setAccessToken] = useState("")
    const [refreshToken, setRefreshToken] = useState("")
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
      console.log("COMPONENT CODE", code)
    }, [])
    

    const handleClickButton = async () => {
        if(!accessToken && !refreshToken) {
            const token = await getToken(code)
            setAccessToken(token.accessToken)
            setRefreshToken(token.refreshToken)
            console.log("if", accessToken, refreshToken)
        }
        else {
            const token = await tokenRefresh(refreshToken)
            setAccessToken(token.accessToken)
            setRefreshToken(token.refreshToken)
            console.log("else", accessToken, refreshToken)
        }

        const retrievedPlaylists = await getPlaylists(accessToken)
        console.log("retrievedPlaylists",retrievedPlaylists)
        setPlaylists(retrievedPlaylists)
        // const playlists = await getPlaylists(token)
    }

    return ( 
    <div>
    <Button onClick={() => handleClickButton()} variant='outlined'> Load the playlists! </Button>
    </div>
    )
}

export default SpotifySection