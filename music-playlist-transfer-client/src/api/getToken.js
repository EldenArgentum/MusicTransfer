const getToken = async () => {
    const data = await fetch('http://localhost:3000/spotify/token')
    const result = await data.json()
    return result.access_token
}
export default getToken