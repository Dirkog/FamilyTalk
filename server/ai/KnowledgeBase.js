class KnowledgeBase {
  handle(input) {
    return { service: "KnowledgeBase", input, createdAt: new Date().toISOString() };
  }
}

module.exports = KnowledgeBase;
