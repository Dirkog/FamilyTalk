const test = require("node:test");
const request = require("supertest");
const { createApp } = require("../../app");

test("health endpoint отвечает ok", async () => {
  await request(createApp()).get("/api/health").expect(200, { status: "ok" });
});
