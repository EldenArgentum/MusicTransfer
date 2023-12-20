import React, { useEffect, useState } from 'react'
import getPlaylists from '../api/getPlaylists'
import { Button, } from '@mui/material'
import tokenRefresh from '../api/tokenRefresh'
import getToken from '../api/getToken'
import { useQuery } from '@tanstack/react-query'

const SpotifySection = ({ code }) => {

    // const [code, setCode] = useState(code)
    const [token, setToken] = useState({})
    // const [refreshToken, setRefreshToken] = useState("")

    const tokenQuery = useQuery({
        queryKey: ["token"],
        queryFn: async () => await getToken(code)
    })
    
    
    const handleClickButton = async () => {
        console.log(tokenQuery)
        console.log(tokenQuery.accessToken)
        console.log(tokenQuery.refreshToken)
    }

    return ( 
    <div>
    <Button onClick={() => handleClickButton()} variant='outlined'> Load the playlists! </Button>
    </div>
    )
}

export default SpotifySection