const express = require("express");

function backupRoutes(services, auth) {
  const router = express.Router();
  router.post("/", auth, (_req, res) => res.json(services.backupService.createManifest()));
  return router;
}

module.exports = backupRoutes;
