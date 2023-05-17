const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController");
const sesstionsController = new SessionsController();

const sessionRoutes = Router();
sessionRoutes.post("/", sesstionsController.create);

module.exports = sessionRoutes;