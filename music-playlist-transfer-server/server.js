const express = require("express")
const app = express()

const PORT = 3000

app.get('/api', (request, response) => {
    response.send("hi")
})

app.listen(3000, () => `Reached on port ${PORT}`)