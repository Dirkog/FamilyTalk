package com.dirkog.familytalk.security

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Test

class SecurityRequirementsTest {
    @Test
    fun defaultsMatchFamilyChatSpec() {
        val requirements = SecurityRequirements()

        assertEquals(90, requirements.jwtSessionDays)
        assertEquals(100, requirements.groupMemberLimit)
        assertEquals("@kto_vanya", requirements.moderatorUsername)
        assertFalse(requirements.turnEnabled)
    }
}
