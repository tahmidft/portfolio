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

Source of truth in git: `public/Farhan-Tahmid-Resume.docx`.

When that DOCX is pushed, GitHub Actions regenerates `public/resume.pdf`, and Vercel redeploys the site automatically.

**Update from your Documents folder:**

```bash
./scripts/sync-resume.sh
git add public/Farhan-Tahmid-Resume.docx public/resume.pdf
git commit -m "Update resume"
git push
```

Or edit/replace `public/Farhan-Tahmid-Resume.docx` directly, commit, and push (PDF syncs via CI).

## Deploy

Pushes to `master` deploy automatically on Vercel: https://farhantahmid.vercel.app
