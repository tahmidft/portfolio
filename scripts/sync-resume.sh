#!/usr/bin/env bash
# Copy resume DOCX + PDF into the repo for the site (no LibreOffice reformat).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC_DIR="${RESUME_DIR:-$HOME/Sync/Resume & Cover Letter/Resume 2026}"
SRC_DOCX="${1:-$SRC_DIR/Farhan-Tahmid-Resume.docx}"
SRC_PDF="${2:-$SRC_DIR/Farhan-Tahmid-Resume.pdf}"

DEST_DOCX="$ROOT/public/Farhan-Tahmid-Resume.docx"
DEST_PDF="$ROOT/public/resume.pdf"
DEST_PDF_NAMED="$ROOT/public/Farhan-Tahmid-Resume.pdf"

if [[ ! -f "$SRC_DOCX" ]]; then
  echo "Resume DOCX not found: $SRC_DOCX" >&2
  exit 1
fi
if [[ ! -f "$SRC_PDF" ]]; then
  echo "Resume PDF not found: $SRC_PDF" >&2
  echo "Export PDF from Word next to the DOCX (same name), then re-run." >&2
  exit 1
fi

cp "$SRC_DOCX" "$DEST_DOCX"
cp "$SRC_PDF" "$DEST_PDF"
cp "$SRC_PDF" "$DEST_PDF_NAMED"

echo "Copied $SRC_DOCX -> $DEST_DOCX"
echo "Copied $SRC_PDF -> $DEST_PDF (and $DEST_PDF_NAMED)"
echo "Next: git add public/Farhan-Tahmid-Resume.docx public/Farhan-Tahmid-Resume.pdf public/resume.pdf && git commit && git push"
