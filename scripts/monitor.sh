#!/usr/bin/env bash
set -euo pipefail
curl -fsS http://localhost:${PORT:-3000}/api/health
