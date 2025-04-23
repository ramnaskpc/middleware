const { Router } = require('express');
const apiController = require("../Controllers/api.controller");

const apiRoute = Router();

apiRoute.get("/v1", apiController.handleV1)
apiRoute.get("/v2", apiController.handleV2)

module.exports = apiRoute;

