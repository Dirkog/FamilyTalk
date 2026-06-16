class IntentRecognizer {
  handle(input) {
    return { service: "IntentRecognizer", input, createdAt: new Date().toISOString() };
  }
}

module.exports = IntentRecognizer;
