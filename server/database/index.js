const { Pool } = require("pg");
const config = require("../config");

let pool = null;

function getPool() {
  if (!config.databaseUrl) {
    throw new Error("DATABASE_URL не задан");
  }
  if (!pool) {
    pool = new Pool({ connectionString: config.databaseUrl });
  }
  return pool;
}

async function query(text, params = []) {
  return getPool().query(text, params);
}

async function close() {
  if (pool) {
    await pool.end();
    pool = null;
  }
}

module.exports = { getPool, query, close };
