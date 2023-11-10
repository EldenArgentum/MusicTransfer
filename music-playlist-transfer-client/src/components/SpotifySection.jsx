import React, { useEffect, useState } from 'react'
import getPlaylists from '../api/getPlaylists'
import { Button } from '@mui/material'
import getToken from '../api/getToken'
import getUserToken from '../api/getUserToken'


const SpotifySection = () => {

    const [token, setToken] = useState("")
    const [playlists, setPlaylist] = useState([])
    const [isButtonClicked, setIsButtonClicked] = useState(false)

    const handleClickButton = async () => {
        const code = sessionStorage.getItem("code")
        const userToken = await getUserToken(code)
        const retrievedPlaylists = await getPlaylists(userToken)
        console.log("retrievedPlaylists",retrievedPlaylists)
        retrievedPlaylists.map(playlist => ({
        }))
        // const playlists = await getPlaylists(token)
    }

    return ( 
    <>
    <Button onClick={() => handleClickButton()} variant='outlined'> Load the playlists! </Button>
    </>
    )
}

export default SpotifySection