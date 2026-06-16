class ResponseGenerator {
  handle(input) {
    return { service: "ResponseGenerator", input, createdAt: new Date().toISOString() };
  }
}

module.exports = ResponseGenerator;
