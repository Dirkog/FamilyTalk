class VoiceMessageService {
  describeEncoding() {
    return { codec: "opus", container: "ogg", encrypted: true };
  }
}

module.exports = VoiceMessageService;
