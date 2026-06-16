package com.dirkog.familytalk.security

data class SecurityRequirements(
    val jwtSessionDays: Int = 90,
    val groupMemberLimit: Int = 100,
    val moderatorUsername: String = "@kto_vanya",
    val encryption: String = "AES-256-GCM + X25519",
    val turnEnabled: Boolean = false,
)
