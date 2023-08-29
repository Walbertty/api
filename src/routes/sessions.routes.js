const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController");
const SesstionsController = new SessionsController();

const sessionRoutes = Router();
sessionRoutes.post("/", SesstionsController.create);

module.exports = sessionRoutes;