const express = require("express")
const app = express()
require("dotenv").config()

app.get('/', (req, res) => {
    res.json({message: "Docker is easy"})
})

const port = process.env.PORT || 8080;

app.listen(port, () => console.log("app listening"));