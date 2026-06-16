const express = require("express");

function supportRoutes(services, auth) {
  const router = express.Router();
  router.post("/ask-ai", auth, async (req, res) => {
    res.json(await services.assistantService.ask(req.body.question || "", req.user.id));
  });
  return router;
}

module.exports = supportRoutes;
