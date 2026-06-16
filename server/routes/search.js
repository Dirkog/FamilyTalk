const express = require("express");

function searchRoutes(services, auth) {
  const router = express.Router();
  router.get("/:chatId", auth, (req, res) => res.json({ results: services.searchService.search(req.params.chatId, req.query.q || "") }));
  return router;
}

module.exports = searchRoutes;
