const express = require("express");
const route = express.Router();
const controllers = require("../controllers");

route.get("/operator", controllers.getAllOperators);
route.get("/operatorGameType", controllers.operatorGameType);
route.get("/operatorName", controllers.getOperatorName);

route.get("/players", controllers.getPlayers);

route.get(
  "/players/best",
  controllers.highPointPlayer
);

module.exports = route;
