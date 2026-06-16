const { forbidden } = require("../utils/Errors");
const RoleManager = require("../auth/RoleManager");
const roleManager = new RoleManager();

function requireModerator(req, _res, next) {
  if (!roleManager.isModerator(req.user)) return next(forbidden());
  return next();
}

module.exports = { requireModerator };
