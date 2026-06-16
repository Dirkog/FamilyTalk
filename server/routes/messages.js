const express = require("express");
const validate = require("../middleware/ValidationMiddleware");
const { messageSchema } = require("../utils/Validators");

function messageRoutes(services, auth) {
  const router = express.Router();
  router.get("/:chatId", auth, (req, res) => res.json({ messages: services.messageService.list(req.params.chatId) }));
  router.post("/", auth, validate(messageSchema), (req, res) => {
    const message = services.messageService.send({ ...req.body, senderId: req.user.id });
    res.status(201).json({ message });
  });
  return router;
}

module.exports = messageRoutes;
