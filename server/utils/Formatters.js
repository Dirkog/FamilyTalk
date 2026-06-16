const publicUser = (user) => ({
  id: user.id,
  email: user.email,
  username: user.username,
  displayName: user.displayName,
  role: user.role,
  createdAt: user.createdAt
});

module.exports = { publicUser };
