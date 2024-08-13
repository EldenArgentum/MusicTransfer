import React from 'react'
import getPlaylists from '../api/getPlaylists'
import { Button, CircularProgress} from '@mui/material'
import getToken from '../api/getToken'
import { useQuery } from '@tanstack/react-query'
import SpotifyPlaylists from './SpotifyPlaylists'
import { atom } from 'jotai'

const SpotifySection = ({ code }) => {

    const selectedRowsAtom = atom([])

    const tokenQuery = useQuery({
        queryKey: ["token"],
        queryFn: async () => await getToken(code)
    })

    const playlistQuery = useQuery({
        queryKey: ["playlists"],
        queryFn: async () => await getPlaylists(tokenQuery.data.accessToken),
        enabled: !!tokenQuery.isSuccess
    })

    return (
    <>
    <div>
    {!playlistQuery.isSuccess ? <CircularProgress /> : <SpotifyPlaylists playlists={playlistQuery.data} loading={playlistQuery.isLoading} selectedRowsAtom={selectedRowsAtom}/>}
    </div>
    </>
    )
}

export default SpotifySection