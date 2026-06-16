const logger = require("../utils/Logger");

function LoggingMiddleware(req, _res, next) {
  logger.info({ method: req.method, path: req.path }, "request");
  next();
}

module.exports = LoggingMiddleware;
