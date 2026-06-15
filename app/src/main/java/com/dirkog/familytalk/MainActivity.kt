package com.dirkog.familytalk

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            FamilyTalkRoot()
        }
    }
}

@Composable
fun FamilyTalkRoot() {
    var state by remember { mutableStateOf(createInitialFamilyChatState()) }

    MaterialTheme {
        Surface(color = Color(0xFFF8FAFC), modifier = Modifier.fillMaxSize()) {
            FamilyTalkScreen(
                state = state,
                onMemberSelected = { state = state.selectMember(it) },
                onDraftChanged = { state = state.updateDraft(it) },
                onSendClicked = { state = state.sendDraftMessage() },
            )
        }
    }
}

@Composable
fun FamilyTalkScreen(
    state: FamilyChatState,
    onMemberSelected: (String) -> Unit,
    onDraftChanged: (String) -> Unit,
    onSendClicked: () -> Unit,
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(20.dp),
    ) {
        Text(
            text = "FamilyTalk",
            style = MaterialTheme.typography.headlineMedium,
            fontWeight = FontWeight.Bold,
        )
        Text(
            text = "Семейный чат без лишнего шума",
            color = Color(0xFF64748B),
            modifier = Modifier.padding(top = 4.dp),
        )

        Spacer(modifier = Modifier.height(20.dp))

        LazyRow(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            items(state.members, key = { it.id }) { member ->
                MemberCard(
                    member = member,
                    selected = member.id == state.selectedMemberId,
                    onClick = { onMemberSelected(member.id) },
                )
            }
        }

        Spacer(modifier = Modifier.height(20.dp))

        ChatHeader(member = state.selectedMember)

        LazyColumn(
            modifier = Modifier
                .weight(1f)
                .fillMaxWidth()
                .padding(vertical = 16.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
            contentPadding = PaddingValues(bottom = 8.dp),
        ) {
            items(state.selectedMessages, key = { it.id }) { message ->
                MessageBubble(message = message)
            }
        }

        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(10.dp),
        ) {
            OutlinedTextField(
                value = state.draft,
                onValueChange = onDraftChanged,
                placeholder = { Text("Написать сообщение") },
                modifier = Modifier.weight(1f),
                singleLine = true,
            )
            Button(
                onClick = onSendClicked,
                enabled = state.draft.isNotBlank(),
            ) {
                Text("Отпр.")
            }
        }
    }
}

@Composable
private fun MemberCard(
    member: FamilyMember,
    selected: Boolean,
    onClick: () -> Unit,
) {
    val background = if (selected) Color(0xFFE0F2FE) else Color.White
    val borderColor = if (selected) Color(0xFF0284C7) else Color.Transparent

    Card(
        colors = CardDefaults.cardColors(containerColor = background),
        shape = RoundedCornerShape(20.dp),
        modifier = Modifier
            .widthIn(min = 132.dp)
            .clickable(onClick = onClick),
    ) {
        Column(modifier = Modifier.padding(14.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                OnlineDot(isOnline = member.isOnline)
                Text(
                    text = member.name,
                    fontWeight = FontWeight.Bold,
                    modifier = Modifier.padding(start = 8.dp),
                )
            }
            Text(
                text = member.role,
                color = Color(0xFF64748B),
                modifier = Modifier.padding(top = 6.dp),
            )
            Box(
                modifier = Modifier
                    .padding(top = 10.dp)
                    .height(3.dp)
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(4.dp))
                    .background(borderColor),
            )
        }
    }
}

@Composable
private fun ChatHeader(member: FamilyMember) {
    Card(
        colors = CardDefaults.cardColors(containerColor = Color.White),
        shape = RoundedCornerShape(24.dp),
        modifier = Modifier.fillMaxWidth(),
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier.padding(18.dp),
        ) {
            Box(
                contentAlignment = Alignment.Center,
                modifier = Modifier
                    .size(52.dp)
                    .clip(CircleShape)
                    .background(Color(0xFF0EA5E9)),
            ) {
                Text(
                    text = member.name.take(1),
                    color = Color.White,
                    style = MaterialTheme.typography.titleLarge,
                    fontWeight = FontWeight.Bold,
                )
            }
            Column(modifier = Modifier.padding(start = 14.dp)) {
                Text(
                    text = member.name,
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold,
                )
                Text(
                    text = if (member.isOnline) "Сейчас онлайн" else "Ответит позже",
                    color = Color(0xFF64748B),
                )
            }
        }
    }
}

@Composable
private fun MessageBubble(message: ChatMessage) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = if (message.isMine) Arrangement.End else Arrangement.Start,
    ) {
        Card(
            colors = CardDefaults.cardColors(
                containerColor = if (message.isMine) Color(0xFF0EA5E9) else Color.White,
            ),
            shape = RoundedCornerShape(
                topStart = 20.dp,
                topEnd = 20.dp,
                bottomStart = if (message.isMine) 20.dp else 6.dp,
                bottomEnd = if (message.isMine) 6.dp else 20.dp,
            ),
            modifier = Modifier.widthIn(max = 300.dp),
        ) {
            Column(modifier = Modifier.padding(14.dp)) {
                Text(
                    text = message.text,
                    color = if (message.isMine) Color.White else Color(0xFF0F172A),
                )
                Text(
                    text = message.time,
                    color = if (message.isMine) Color(0xFFE0F2FE) else Color(0xFF94A3B8),
                    style = MaterialTheme.typography.labelSmall,
                    modifier = Modifier.padding(top = 6.dp),
                )
            }
        }
    }
}

@Composable
private fun OnlineDot(isOnline: Boolean) {
    Box(
        modifier = Modifier
            .size(10.dp)
            .clip(CircleShape)
            .background(if (isOnline) Color(0xFF22C55E) else Color(0xFFCBD5E1)),
    )
}

@Preview(showBackground = true)
@Composable
private fun FamilyTalkPreview() {
    MaterialTheme {
        FamilyTalkScreen(
            state = createInitialFamilyChatState(),
            onMemberSelected = {},
            onDraftChanged = {},
            onSendClicked = {},
        )
    }
}
