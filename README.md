# Farhan Tahmid — Portfolio

Personal portfolio site for Farhan Tahmid, built with React + Vite + TypeScript.

## Features

- Animated aurora background with interactive project hover accents
- Live GitHub last-updated timestamps via the GitHub API
- Tech stack filter chips for projects
- Skills grid and resume modal
- Responsive layout for desktop and mobile

## Stack

- React 19
- TypeScript
- Vite 8

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Resume

Source of truth (edit in Word, keep both files together):

`~/Sync/Resume & Cover Letter/Resume 2026/Farhan-Tahmid-Resume.docx`  
`~/Sync/Resume & Cover Letter/Resume 2026/Farhan-Tahmid-Resume.pdf`

Copy both into the site (does **not** reformat with LibreOffice):

```bash
./scripts/sync-resume.sh
git add public/Farhan-Tahmid-Resume.docx public/Farhan-Tahmid-Resume.pdf public/resume.pdf
git commit -m "Update resume"
git push
```

The Resume modal previews `public/resume.pdf` and offers DOCX/PDF downloads.
## Deploy

Pushes to `master` deploy automatically on Vercel: https://farhantahmid.vercel.app
