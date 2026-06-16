class LearningService {
  handle(input) {
    return { service: "LearningService", input, createdAt: new Date().toISOString() };
  }
}

module.exports = LearningService;
