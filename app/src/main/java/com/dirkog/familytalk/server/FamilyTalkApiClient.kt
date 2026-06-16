package com.dirkog.familytalk.server

import java.net.HttpURLConnection
import java.net.URL

class FamilyTalkApiClient(
    private val config: FamilyTalkServerConfig = FamilyTalkServerConfig(),
) {
    fun health(): String {
        val connection = URL("${config.baseUrl}/health").openConnection() as HttpURLConnection
        connection.requestMethod = "GET"
        connection.connectTimeout = 3_000
        connection.readTimeout = 3_000
        return connection.inputStream.bufferedReader().use { it.readText() }
    }
}
