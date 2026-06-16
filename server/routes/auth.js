const express = require("express");
const validate = require("../middleware/ValidationMiddleware");
const { registerSchema, loginSchema } = require("../utils/Validators");
const { publicUser } = require("../utils/Formatters");

function authRoutes(services) {
  const router = express.Router();
  router.post("/register", validate(registerSchema), async (req, res, next) => {
    try {
      const user = await services.registerService.register(req.body);
      res.status(201).json({ user: publicUser(user) });
    } catch (error) {
      next(error);
    }
  });
  router.post("/login", validate(loginSchema), async (req, res, next) => {
    try {
      const result = await services.loginService.login(req.body, { ipAddress: req.ip, userAgent: req.headers["user-agent"] });
      res.json({ token: result.token, user: publicUser(result.user) });
    } catch (error) {
      next(error);
    }
  });
  router.post("/password-reset", (req, res) => res.json(services.passwordReset.request(req.body.email || "")));
  return router;
}

module.exports = authRoutes;
