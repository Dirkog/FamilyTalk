class AppError extends Error {
  constructor(status, code, message) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

const badRequest = (message) => new AppError(400, "BAD_REQUEST", message);
const unauthorized = (message = "Требуется авторизация") => new AppError(401, "UNAUTHORIZED", message);
const forbidden = (message = "Недостаточно прав") => new AppError(403, "FORBIDDEN", message);
const notFound = (message = "Не найдено") => new AppError(404, "NOT_FOUND", message);

module.exports = { AppError, badRequest, unauthorized, forbidden, notFound };
