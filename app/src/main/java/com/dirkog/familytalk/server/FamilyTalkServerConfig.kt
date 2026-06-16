package com.dirkog.familytalk.server

data class FamilyTalkServerConfig(
    val baseUrl: String = "http://10.0.2.2:3000/api",
    val websocketUrl: String = "ws://10.0.2.2:3000",
)
