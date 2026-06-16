const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const { createApp } = require("../../app");

test("регистрация и вход возвращают JWT", async () => {
  const app = createApp();
  await request(app)
    .post("/api/auth/register")
    .send({ email: "mom@example.com", username: "mom", password: "password123", displayName: "Мама" })
    .expect(201);

  const response = await request(app)
    .post("/api/auth/login")
    .send({ email: "mom@example.com", password: "password123" })
    .expect(200);

  assert.ok(response.body.token);
  assert.equal(response.body.user.username, "mom");
});
