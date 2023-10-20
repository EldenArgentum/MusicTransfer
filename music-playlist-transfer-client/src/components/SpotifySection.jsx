import React, { useEffect, useState } from 'react'
import getPlaylists from '../api/getPlaylists'
import { Button } from '@mui/material'
import getToken from '../api/getToken'


const SpotifySection = () => {

    const [token, setToken] = useState("")

    const handleClickButton = async () => {
        if (!sessionStorage.getItem("access_token")) {
            const tokenObj = await getToken()
            setToken(token)
        }
        else {
            setToken(token)
        }
        
        // const playlists = await getPlaylists(token)
    }

    return ( 
    <>
    <Button onClick={() => handleClickButton()} variant='outlined'> asdASDasd </Button>
    </>
    )
}

export default SpotifySection