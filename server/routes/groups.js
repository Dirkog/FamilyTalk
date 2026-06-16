const express = require("express");
const validate = require("../middleware/ValidationMiddleware");
const { groupSchema } = require("../utils/Validators");

function groupRoutes(services, auth) {
  const router = express.Router();
  router.post("/", auth, validate(groupSchema), (req, res, next) => {
    try {
      const group = services.groupService.create({ title: req.body.title, creatorId: req.user.id, memberIds: req.body.memberIds });
      res.status(201).json({ group });
    } catch (error) {
      next(error);
    }
  });
  return router;
}

module.exports = groupRoutes;
