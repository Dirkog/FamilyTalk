class ErrorClassifier {
  handle(input) {
    return { service: "ErrorClassifier", input, createdAt: new Date().toISOString() };
  }
}

module.exports = ErrorClassifier;
