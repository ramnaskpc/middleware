const express = require("express");
const apiRoute = require("./Routes/api.route");
const sampleRoute = require("./Routes/sample.route");
const logger = require("./Middleware/logger");
const passwordRoute = require("./Routes/password.route");
const authRoute = require("./Routes/auth.route");
require('dotenv').config();
const cors = require("cors");


const app = express();

app.use(cors())
app.use(express.json());
app.use(logger)
app.use("/api", apiRoute)
app.use("/api2", sampleRoute)
app.use("/password", passwordRoute)
app.use("/auth", authRoute)

// app.get("/", (request, response) => {
//     response.status(200).send("Hello World");
// })

app.listen(process.env.PORT || 9090, () => {
    console.log("Server is running on port " + process.env.PORT || 9090);
})


