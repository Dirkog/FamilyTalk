class TwoFactorAuth {
  verifyBiometricFallback(user, proof) {
    if (!user.biometricEnabled) return false;
    return Boolean(proof && proof.length > 16);
  }
}

module.exports = TwoFactorAuth;
