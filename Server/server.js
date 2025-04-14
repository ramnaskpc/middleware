const express = require("express")
require("dotenv").config()  // to access environment variables
const cors = require("cors")

// cors -> cross origin resource sharing

const app = express()

app.use(express.json())
app.use(cors())

app.get("/api", (request, response) => {
    try {
        const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1
        return response.status(200).send({
            number: randomNumber
        })
    } catch (error) {
        return response.status(500).send({
            message: "Internal server error"
        })   
    }
})

app.listen(process.env.PORT || 9090, () => {
    console.log(`Server is running on port ${process.env.PORT || 9090}`);
})