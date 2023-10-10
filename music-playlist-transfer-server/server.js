const express = require("express")
const app = express()

app.get('/api', (request, response) => {
    response.json()
})

app.listen(3000, () => "Reached on port 3000")