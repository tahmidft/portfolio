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

Generate the ATS-friendly DOCX (and one-page PDF check via LibreOffice):

```bash
python3 -m venv .venv-resume
.venv-resume/bin/pip install -r requirements-resume.txt
.venv-resume/bin/python generate_resume.py
```

Outputs `Farhan_Tahmid_Resume.docx` / `.pdf`. The site serves `public/resume.pdf` in the Resume modal.

## Deploy

Ready for Vercel, Netlify, or GitHub Pages (static Vite build).
