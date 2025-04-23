const {Router} = require('express');
const sampleController = require("../Controllers/sample.controller");

const sampleRoute = Router();

sampleRoute.get("/v1", sampleController.handleV1)

module.exports = sampleRoute;