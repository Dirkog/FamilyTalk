const express = require("express");
const { requireModerator } = require("../middleware/RoleMiddleware");

function adminRoutes(services, auth) {
  const router = express.Router();
  router.use(auth, requireModerator);
  router.get("/logs", (_req, res) => res.json({ logs: services.logManager.list() }));
  router.delete("/logs/:id", (req, res) => res.json({ deleted: services.logManager.remove(req.params.id) }));
  router.post("/nim", (req, res) => {
    services.logManager.write("info", "nim", "Модератор обновил настройку NVIDIA NIM", { moderator: req.user.username });
    res.json({ status: "saved_by_moderator" });
  });
  return router;
}

module.exports = adminRoutes;
