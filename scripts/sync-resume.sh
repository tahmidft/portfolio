#!/usr/bin/env bash
# Copy your local resume into the repo and regenerate the PDF for the site.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${1:-$HOME/Documents/Farhan-Tahmid-Resume.docx}"
DEST="$ROOT/public/Farhan-Tahmid-Resume.docx"

if [[ ! -f "$SRC" ]]; then
  echo "Resume not found: $SRC" >&2
  exit 1
fi

cp "$SRC" "$DEST"
echo "Copied $SRC -> $DEST"

if command -v libreoffice >/dev/null 2>&1; then
  libreoffice --headless --convert-to pdf --outdir "$ROOT/public" "$DEST"
  mv -f "$ROOT/public/Farhan-Tahmid-Resume.pdf" "$ROOT/public/resume.pdf"
  echo "Wrote $ROOT/public/resume.pdf"
else
  echo "LibreOffice not found; commit the DOCX and let GitHub Actions generate the PDF."
fi

echo "Next: git add public/Farhan-Tahmid-Resume.docx public/resume.pdf && git commit && git push"
