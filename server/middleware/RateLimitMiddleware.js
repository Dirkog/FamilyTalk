function RateLimitMiddleware() {
  const hits = new Map();
  return (req, res, next) => {
    const key = req.ip;
    const now = Date.now();
    const recent = (hits.get(key) || []).filter((time) => now - time < 60000);
    recent.push(now);
    hits.set(key, recent);
    if (recent.length > 240) return res.status(429).json({ error: "Слишком много запросов" });
    return next();
  };
}

module.exports = RateLimitMiddleware;
