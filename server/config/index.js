require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 3000),
  databaseUrl: process.env.DATABASE_URL || "",
  jwtSecret: process.env.JWT_SECRET || "dev-only-change-me",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "90d",
  moderatorUsername: process.env.MODERATOR_USERNAME || "@kto_vanya",
  nvidiaNimApiKey: process.env.NVIDIA_NIM_API_KEY || "",
  uploadDir: process.env.UPLOAD_DIR || "server/uploads",
  autoDeleteSweepIntervalMs: Number(process.env.AUTO_DELETE_SWEEP_INTERVAL_MS || 60000),
  timezonePresets: ["Europe/Moscow", "Asia/Vladivostok"]
};

module.exports = config;
