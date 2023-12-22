import React, { useEffect, useState } from 'react'
import getPlaylists from '../api/getPlaylists'
import { Button, CircularProgress} from '@mui/material'
import tokenRefresh from '../api/tokenRefresh'
import getToken from '../api/getToken'
import { useQuery } from '@tanstack/react-query'

const SpotifySection = ({ code }) => {

    // const [code, setCode] = useState(code)
    const [token, setToken] = useState({})
    // const [refreshToken, setRefreshToken] = useState("")

    const tokenQuery = useQuery({
        queryKey: ["token"],
        queryFn: async () => {
            const queriedToken = await getToken(code)
            setToken(queriedToken.accessToken)
        }
    })
    
    
    const handleClickButton = async () => {
        const playlistQuery = useQuery({
            queryKey: ["playlists"],
            queryFn: async () => {
                const playlists = await getPlaylists(token)
            }
        })
        
    }

    return (
    <div>
    <Button onClick={() => handleClickButton()} variant='outlined'> Load the playlists! </Button>

    {tokenQuery.isFetching ? <CircularProgress /> : <div>hello</div>}
    </div>
    )
}

export default SpotifySection