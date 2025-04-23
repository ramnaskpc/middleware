const express = require("express");
const apiRoute = require("./Routes/api.route");
const sampleRoute = require("./Routes/sample.route");
const logger = require("./Middleware/logger");



const app = express();

app.use(logger)
app.use("/api", apiRoute)
app.use("/api2", sampleRoute)

// app.get("/", (request, response) => {
//     response.status(200).send("Hello World");
// })

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})


