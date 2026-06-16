const { badRequest } = require("../utils/Errors");

function validate(schema) {
  return (req, _res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) return next(badRequest(result.error.issues.map((issue) => issue.message).join(", ")));
    req.body = result.data;
    return next();
  };
}

module.exports = validate;
