const express = require("express");
const AuthMiddleware = require("../middleware/AuthMiddleware");
const authRoutes = require("./auth");
const userRoutes = require("./users");
const chatRoutes = require("./chats");
const messageRoutes = require("./messages");
const groupRoutes = require("./groups");
const fileRoutes = require("./files");
const callRoutes = require("./calls");
const settingsRoutes = require("./settings");
const searchRoutes = require("./search");
const exportRoutes = require("./export");
const backupRoutes = require("./backup");
const supportRoutes = require("./support");
const adminRoutes = require("./admin");

function apiRoutes(services) {
  const router = express.Router();
  const auth = AuthMiddleware(services.jwtManager, services.users);
  router.get("/health", (_req, res) => res.json({ status: "ok" }));
  router.use("/auth", authRoutes(services));
  router.use("/users", userRoutes(services, auth));
  router.use("/chats", chatRoutes(services, auth));
  router.use("/messages", messageRoutes(services, auth));
  router.use("/groups", groupRoutes(services, auth));
  router.use("/files", fileRoutes(services, auth));
  router.use("/calls", callRoutes(services, auth));
  router.use("/settings", settingsRoutes(services, auth));
  router.use("/search", searchRoutes(services, auth));
  router.use("/export", exportRoutes(services, auth));
  router.use("/backup", backupRoutes(services, auth));
  router.use("/support", supportRoutes(services, auth));
  router.use("/admin", adminRoutes(services, auth));
  return router;
}

module.exports = apiRoutes;
