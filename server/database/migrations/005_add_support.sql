CREATE TABLE IF NOT EXISTS support_tickets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  requester_id UUID REFERENCES users(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'open',
  title TEXT NOT NULL,
  assigned_to TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ai_training_data (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  source_ticket_id UUID REFERENCES support_tickets(id) ON DELETE SET NULL,
  question TEXT NOT NULL,
  moderator_answer TEXT,
  status TEXT NOT NULL DEFAULT 'pending_moderator',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
