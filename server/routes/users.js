const express = require("express");
const { publicUser } = require("../utils/Formatters");

function userRoutes(services, auth) {
  const router = express.Router();
  router.get("/me", auth, (req, res) => res.json({ user: publicUser(req.user) }));
  router.get("/", auth, (_req, res) => res.json({ users: Array.from(services.users.values()).map(publicUser) }));
  return router;
}

module.exports = userRoutes;
