const fs = require("fs/promises");
const path = require("path");
const db = require("../server/database");

(async () => {
  const dir = path.join(__dirname, "..", "server", "database", "migrations");
  const files = (await fs.readdir(dir)).filter((file) => file.endsWith(".sql")).sort();
  for (const file of files) {
    const sql = await fs.readFile(path.join(dir, file), "utf8");
    await db.query(sql);
    console.log(`applied ${file}`);
  }
  await db.close();
})();
