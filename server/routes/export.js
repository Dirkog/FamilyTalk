const express = require("express");

function exportRoutes(services, auth) {
  const router = express.Router();
  router.get("/:chatId", auth, (req, res) => res.json(services.exportService.exportChat(req.params.chatId)));
  return router;
}

module.exports = exportRoutes;
