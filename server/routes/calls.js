const express = require("express");

function callRoutes(services, auth) {
  const router = express.Router();
  router.post("/", auth, (req, res) => res.status(201).json({ call: services.callService.start(req.body.chatId, req.user.id) }));
  router.post("/:callId/end", auth, (req, res) => res.json({ call: services.callService.end(req.params.callId) }));
  return router;
}

module.exports = callRoutes;
