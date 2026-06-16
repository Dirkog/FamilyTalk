const bcrypt = require("bcryptjs");
const { createId, nowIso, normalizeUsername } = require("../utils/Helpers");
const { badRequest } = require("../utils/Errors");

class RegisterService {
  constructor(userStore) {
    this.userStore = userStore;
  }

  async register(input) {
    const email = input.email.trim().toLowerCase();
    const username = normalizeUsername(input.username);
    const exists = Array.from(this.userStore.values()).some((user) => user.email === email || user.username === username);
    if (exists) throw badRequest("Пользователь уже существует");
    const user = {
      id: createId(),
      email,
      username,
      displayName: input.displayName,
      passwordHash: await bcrypt.hash(input.password, 10),
      role: "member",
      biometricEnabled: false,
      createdAt: nowIso(),
      updatedAt: nowIso()
    };
    this.userStore.set(user.id, user);
    return user;
  }
}

module.exports = RegisterService;
