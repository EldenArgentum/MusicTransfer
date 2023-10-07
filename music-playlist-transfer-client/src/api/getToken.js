
const getToken = async () => {
    const clientId = import.meta.env.VITE_CLIENTID //process.env.VITE_CLIENTID
    const clientSecret = import.meta.env.VITE_CLIENTSECRET // process.VITE_CLIENTSECRET

    const authParameters = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            // 'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret
    }

    const data = await fetch('https://accounts.spotify.com/api/token', authParameters)
    const result = await data.json(data)

    return result.access_token
}

export default getToken