import React, { useEffect } from 'react'
import getPlaylists from '../api/getPlaylists'
import { Button } from '@mui/material'
import getToken from '../api/getToken'


const SpotifySection = () => {
    

    const handleClickButton = async () => {
        const token = await getToken()
        const playlists = await getPlaylists(token)
        console.log(playlists)
    }

    return ( 
    <>
    <Button onClick={() => handleClickButton()} variant='outlined'> asdASDasd </Button>
    </>
    )
}

export default SpotifySection