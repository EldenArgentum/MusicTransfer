import React, { useEffect, useState } from 'react'
import getPlaylists from '../api/getPlaylists'
import { Button, CircularProgress} from '@mui/material'
import getToken from '../api/getToken'
import { useQuery } from '@tanstack/react-query'
import SpotifyPlaylists from './SpotifyPlaylists'

const SpotifySection = ({ code }) => {

    const [isClicked, setIsClicked] = useState(false)

    const tokenQuery = useQuery({
        queryKey: ["token"],
        queryFn: async () => await getToken(code)
    })

    const playlistQuery = useQuery({
        queryKey: ["playlists"],
        queryFn: async () => await getPlaylists(tokenQuery.data.accessToken),
        enabled: !!tokenQuery.isSuccess
    })

    const handleClickButton = async () => {
        setIsClicked(true)
    }

    return (
    <>
    <Button onClick={() => handleClickButton()} variant='outlined'> Load the playlists! </Button>
    <div>
    {!isClicked ? <CircularProgress /> : <SpotifyPlaylists playlists={playlistQuery.data}/>}
    </div>
    </>
    )
}

export default SpotifySection