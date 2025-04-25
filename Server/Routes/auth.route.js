const { Router } = require("express");
const authController = require("../Controllers/auth.controller")

const authRoute = Router();

authRoute.post("/", authController.handleLogin);

module.exports = authRoute;