# Recruiter Agent for Rifat Erdem Sahin

AI-powered recruiter platform built with Next.js, deployed on Fly.io.

## Features

- **Search & Tags** — Full-text search across CV with tag filtering
- **Active AI Agent** — Gemini-powered chat for any recruiter question
- **Role Matcher** — Paste a job description and get an instant suitability score
- **Reference Letter Generator** — Generate tailored professional reference letters
- **Right to Represent (RTR)** — Recruiters submit their email and receive an automated confirmation
- **CV Download** — Direct links to PDF, Word, and profile presentation

## Tech Stack

- Next.js 16 + TypeScript + Tailwind CSS
- Framer Motion for animations
- Gemini 2.0 Flash API for AI responses
- n8n webhook for RTR email notifications
- Fly.io for deployment
- Azure KeyVault for secrets (API keys, n8n tokens)

## Source CV

All answers are powered by [`source_Cv.md`](./source_Cv.md) in this repo.

## Deployment

```bash
cd recruiter-platform
fly deploy
```

Secrets are managed via Azure KeyVault (`dp-kv-deliverypilot`) and set as Fly.io secrets:
- `NEXT_PUBLIC_GEMINI_API_KEY`
- `N8N_API_KEY`
- `N8N_RTR_WEBHOOK_URL`

## Live URL

Coming soon on Fly.io after deployment.
