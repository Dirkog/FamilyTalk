const express = require("express");
const { familyLocalTime } = require("../utils/TimezoneUtils");

function settingsRoutes(_services, auth) {
  const router = express.Router();
  router.get("/timezones", auth, (_req, res) => res.json(familyLocalTime()));
  return router;
}

module.exports = settingsRoutes;
