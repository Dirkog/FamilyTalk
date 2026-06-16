const { randomUUID } = require("crypto");

const nowIso = () => new Date().toISOString();
const createId = () => randomUUID();

const normalizeUsername = (username) => username.trim().toLowerCase();

module.exports = { nowIso, createId, normalizeUsername };
