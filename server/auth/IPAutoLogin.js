class IPAutoLogin {
  constructor() {
    this.allowed = new Map();
  }

  remember(ipAddress, userId) {
    this.allowed.set(ipAddress, userId);
  }

  findUserId(ipAddress) {
    return this.allowed.get(ipAddress) || null;
  }
}

module.exports = IPAutoLogin;
