const { unauthorized } = require("../utils/Errors");

function AuthMiddleware(jwtManager, userStore) {
  return (req, _res, next) => {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : "";
    if (!token) return next(unauthorized());
    try {
      const payload = jwtManager.verify(token);
      const user = userStore.get(payload.sub);
      if (!user) return next(unauthorized());
      req.user = user;
      req.token = payload;
      return next();
    } catch (error) {
      return next(unauthorized());
    }
  };
}

module.exports = AuthMiddleware;
