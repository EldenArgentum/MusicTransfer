
const APIController = async () => {
    const clientId = import.meta.env.VITE_CLIENTID //process.env.VITE_CLIENTID
    const clientSecret = import.meta.env.VITE_CLIENTSECRET // process.VITE_CLIENTSECRET

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    })

    const data = await result.json()
    return data
}

export default APIController