#!/usr/bin/env bash
set -euo pipefail

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI 'gh' is required but not installed. See https://github.com/cli/cli" >&2
  exit 1
fi

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 issues.json" >&2
  exit 1
fi

input_file="$1"

jq -c '.issues[]' "$input_file" | while read -r issue; do
  title=$(echo "$issue" | jq -r '.title')
  body=$(echo "$issue" | jq -r '.body')
  labels=$(echo "$issue" | jq -r '.labels | join(",")')
  assignees=$(echo "$issue" | jq -r '.assignees | join(",")')

  cmd=(gh issue create --title "$title" --body "$body")
  if [[ -n "$labels" ]]; then
    cmd+=(--label "$labels")
  fi
  if [[ -n "$assignees" ]]; then
    cmd+=(--assignee "$assignees")
  fi

  echo "Creating: $title"
  "${cmd[@]}"
done

