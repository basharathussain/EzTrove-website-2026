#!/usr/bin/env bash
# EzTrove — Ubuntu VPS deploy script (test branch).
# Run from the project root on the server, ON the `test` branch.
#
# Usage:
#   ./deploy/deploy.sh
#
# What it does:
#   1. Fetches + fast-forwards origin/test
#   2. Rebuilds the Docker image
#   3. Restarts the container
#   4. Reloads host nginx (if present + config exists)
#   5. Prints a smoke-test result

set -euo pipefail

cd "$(dirname "$0")/.."
REPO_ROOT="$(pwd)"
echo "[deploy] repo root: $REPO_ROOT"

# Sanity: we must be on the test branch (the localhost-port-only one).
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$CURRENT_BRANCH" != "test" ]]; then
  echo "[deploy] ERROR: expected branch 'test', got '$CURRENT_BRANCH'." >&2
  echo "[deploy]        run:  git checkout test && ./deploy/deploy.sh" >&2
  exit 1
fi

echo "[deploy] pulling latest origin/test…"
git fetch --prune origin
git pull --ff-only origin test

echo "[deploy] rebuilding image + restarting container…"
docker compose up -d --build

echo "[deploy] reloading host nginx (if configured)…"
if command -v nginx >/dev/null 2>&1 && [[ -f /etc/nginx/sites-enabled/eztrove ]]; then
  sudo nginx -t && sudo systemctl reload nginx
  echo "[deploy] nginx reloaded."
else
  echo "[deploy] host nginx not configured yet — skipping reload."
  echo "[deploy] see deploy/README.md for first-time nginx setup."
fi

echo "[deploy] waiting 3s for container to settle…"
sleep 3

echo "[deploy] smoke test:"
echo -n "  /healthz on 127.0.0.1:12090 → "
curl -sS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:12090/healthz || true
echo -n "  / on port 80 (via host nginx) → "
curl -sS -o /dev/null -w "%{http_code}\n" http://127.0.0.1/  || true

echo "[deploy] done."
