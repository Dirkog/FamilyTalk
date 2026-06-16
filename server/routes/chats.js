const express = require("express");
const { createId, nowIso } = require("../utils/Helpers");

function chatRoutes(_services, auth) {
  const router = express.Router();
  const chats = new Map();
  router.get("/", auth, (_req, res) => res.json({ chats: Array.from(chats.values()) }));
  router.post("/", auth, (req, res) => {
    const chat = { id: createId(), type: req.body.type || "direct", title: req.body.title || null, createdBy: req.user.id, createdAt: nowIso() };
    chats.set(chat.id, chat);
    res.status(201).json({ chat });
  });
  return router;
}

module.exports = chatRoutes;
