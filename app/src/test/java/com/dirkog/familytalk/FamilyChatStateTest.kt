package com.dirkog.familytalk

import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotSame
import org.junit.Assert.assertSame
import org.junit.Test

class FamilyChatStateTest {
    @Test
    fun sendDraftMessageAddsTrimmedMessageToSelectedChat() {
        val state = createInitialFamilyChatState()
            .updateDraft("  Уже выезжаю  ")

        val updated = state.sendDraftMessage(sentAt = "18:45")
        val message = updated.selectedMessages.last()

        assertEquals("Я", message.author)
        assertEquals("Уже выезжаю", message.text)
        assertEquals("18:45", message.time)
        assertEquals("", updated.draft)
        assertEquals(state.selectedMessages.size + 1, updated.selectedMessages.size)
    }

    @Test
    fun blankDraftDoesNotChangeState() {
        val state = createInitialFamilyChatState().updateDraft("   ")

        assertSame(state, state.sendDraftMessage(sentAt = "18:45"))
    }

    @Test
    fun selectMemberSwitchesConversationAndClearsDraft() {
        val state = createInitialFamilyChatState().updateDraft("черновик")

        val updated = state.selectMember("dad")

        assertEquals("dad", updated.selectedMemberId)
        assertEquals("", updated.draft)
        assertNotSame(state.selectedMessages, updated.selectedMessages)
    }
}
