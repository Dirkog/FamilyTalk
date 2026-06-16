const { z } = require("zod");

const registerSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(64),
  password: z.string().min(8),
  displayName: z.string().min(1).max(128)
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  biometricProof: z.string().optional()
});

const messageSchema = z.object({
  chatId: z.string().min(1),
  body: z.string().min(1).max(10000),
  encryptedPayload: z.string().optional(),
  autoDeleteAt: z.string().datetime().optional()
});

const groupSchema = z.object({
  title: z.string().min(1).max(128),
  memberIds: z.array(z.string()).max(100)
});

module.exports = { registerSchema, loginSchema, messageSchema, groupSchema };
