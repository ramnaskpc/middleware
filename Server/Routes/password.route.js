const {Router} = require("express");
const passwordController = require("../Controllers/password.controller")

const passwordRoute = Router();

passwordRoute.post("/create", passwordController.createPasswordHash);
passwordRoute.post("/compare",passwordController.comparePasswordHash);

module.exports = passwordRoute;

