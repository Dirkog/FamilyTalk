const express = require("express");
const helmet = require("helmet");
const apiRoutes = require("./routes/api");
const CORSMiddleware = require("./middleware/CORSMiddleware");
const RateLimitMiddleware = require("./middleware/RateLimitMiddleware");
const LoggingMiddleware = require("./middleware/LoggingMiddleware");
const ErrorHandler = require("./middleware/ErrorHandler");
const { createServices } = require("./services/ApplicationServices");

function createApp(services = createServices()) {
  const app = express();
  app.locals.services = services;
  app.use(helmet());
  app.use(CORSMiddleware);
  app.use(RateLimitMiddleware());
  app.use(express.json({ limit: "2mb" }));
  app.use(LoggingMiddleware);
  app.use("/api", apiRoutes(services));
  app.use(ErrorHandler);
  return app;
}

module.exports = { createApp };
