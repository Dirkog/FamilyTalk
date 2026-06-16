const jwt = require("jsonwebtoken");
const { randomUUID } = require("crypto");
const config = require("../config");

class JWTManager {
  issue(user) {
    const tokenId = randomUUID();
    const token = jwt.sign(
      { sub: user.id, username: user.username, role: user.role, jti: tokenId },
      config.jwtSecret,
      { expiresIn: config.jwtExpiresIn }
    );
    return { token, tokenId };
  }

  verify(token) {
    return jwt.verify(token, config.jwtSecret);
  }
}

module.exports = JWTManager;
