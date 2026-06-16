const { AppError } = require("../utils/Errors");
const logger = require("../utils/Logger");

function ErrorHandler(error, _req, res, _next) {
  if (error instanceof AppError) {
    return res.status(error.status).json({ error: error.code, message: error.message });
  }
  logger.error({ error }, "unhandled_error");
  return res.status(500).json({ error: "INTERNAL_ERROR", message: "Внутренняя ошибка сервера" });
}

module.exports = ErrorHandler;
