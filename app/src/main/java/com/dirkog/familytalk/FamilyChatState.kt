package com.dirkog.familytalk

import java.time.LocalTime
import java.time.format.DateTimeFormatter

data class FamilyMember(
    val id: String,
    val name: String,
    val role: String,
    val isOnline: Boolean,
)

data class ChatMessage(
    val id: String,
    val author: String,
    val text: String,
    val time: String,
    val isMine: Boolean,
)

data class FamilyChatState(
    val members: List<FamilyMember>,
    val selectedMemberId: String,
    val messages: Map<String, List<ChatMessage>>,
    val draft: String = "",
) {
    val selectedMember: FamilyMember
        get() = members.first { it.id == selectedMemberId }

    val selectedMessages: List<ChatMessage>
        get() = messages[selectedMemberId].orEmpty()
}

fun createInitialFamilyChatState(): FamilyChatState {
    val members = listOf(
        FamilyMember(id = "mom", name = "Мама", role = "Дома", isOnline = true),
        FamilyMember(id = "dad", name = "Папа", role = "На работе", isOnline = false),
        FamilyMember(id = "son", name = "Сын", role = "В школе", isOnline = true),
        FamilyMember(id = "grandma", name = "Бабушка", role = "На связи", isOnline = true),
    )

    return FamilyChatState(
        members = members,
        selectedMemberId = "mom",
        messages = mapOf(
            "mom" to listOf(
                ChatMessage(
                    id = "mom-1",
                    author = "Мама",
                    text = "Не забудь купить хлеб по дороге домой.",
                    time = "09:12",
                    isMine = false,
                ),
                ChatMessage(
                    id = "mom-2",
                    author = "Я",
                    text = "Хорошо, ещё возьму молоко.",
                    time = "09:14",
                    isMine = true,
                ),
            ),
            "dad" to listOf(
                ChatMessage(
                    id = "dad-1",
                    author = "Папа",
                    text = "Вечером соберёмся все вместе?",
                    time = "08:30",
                    isMine = false,
                ),
            ),
            "son" to listOf(
                ChatMessage(
                    id = "son-1",
                    author = "Сын",
                    text = "Уроки закончились, иду домой.",
                    time = "13:05",
                    isMine = false,
                ),
            ),
            "grandma" to listOf(
                ChatMessage(
                    id = "grandma-1",
                    author = "Бабушка",
                    text = "Позвоните, когда освободитесь.",
                    time = "10:48",
                    isMine = false,
                ),
            ),
        ),
    )
}

fun FamilyChatState.selectMember(memberId: String): FamilyChatState {
    if (members.none { it.id == memberId }) return this
    return copy(selectedMemberId = memberId, draft = "")
}

fun FamilyChatState.updateDraft(text: String): FamilyChatState = copy(draft = text)

fun FamilyChatState.sendDraftMessage(
    sentAt: String = LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm")),
): FamilyChatState {
    val text = draft.trim()
    if (text.isEmpty()) return this

    val currentMessages = selectedMessages
    val message = ChatMessage(
        id = "$selectedMemberId-${currentMessages.size + 1}",
        author = "Я",
        text = text,
        time = sentAt,
        isMine = true,
    )

    return copy(
        messages = messages + (selectedMemberId to currentMessages + message),
        draft = "",
    )
}
