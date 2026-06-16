const bcrypt = require("bcryptjs");
const { unauthorized } = require("../utils/Errors");

class LoginService {
  constructor(userStore, jwtManager, sessionManager) {
    this.userStore = userStore;
    this.jwtManager = jwtManager;
    this.sessionManager = sessionManager;
  }

  async login(input, meta = {}) {
    const email = input.email.trim().toLowerCase();
    const user = Array.from(this.userStore.values()).find((item) => item.email === email);
    if (!user) throw unauthorized("Неверная почта или пароль");
    const ok = await bcrypt.compare(input.password, user.passwordHash);
    if (!ok) throw unauthorized("Неверная почта или пароль");
    const issued = this.jwtManager.issue(user);
    this.sessionManager.createSession(user.id, issued.tokenId, meta.ipAddress, meta.userAgent);
    return { user, token: issued.token };
  }
}

module.exports = LoginService;
