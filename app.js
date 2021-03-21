const express = require('express')

const app = express()
port = 3000

//Listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`))