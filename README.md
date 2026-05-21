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

## Links

- **Live Platform:** https://recruiter-agent-rifat.fly.dev
- **Right to Represent:** https://recruiter-agent-rifat.fly.dev/rtr
- **GitHub Source:** https://github.com/rifaterdemsahin/recruiter-agent
- **Full CV (PDF):** https://rifaterdemsahin.com/wp-content/uploads/2025/05/erdem-sahin-cv_summary_2025_may.pdf
- **Full CV (Word):** https://rifaterdemsahin.com/wp-content/uploads/2025/05/erdem-sahin-cv_summary_2025_may.docx
- **Profile Presentation:** https://rifaterdemsahin.com/wp-content/uploads/2025/02/rifaterdemsahinprofilepresentation.v2025.2.pdf
- **Schedule a Call:** https://calendly.com/rifaterdem/schedule
- **LinkedIn:** https://linkedin.com/in/rifaterdemsahin

## KeyVault & Secrets

Secrets are stored in Azure KeyVault (`dp-kv-deliverypilot`) and injected as Fly.io secrets:
- `NEXT_PUBLIC_GEMINI_API_KEY` — Gemini AI key from KeyVault `GEMINI-API-KEY-PRIMARY`
- `N8N_API_KEY` — n8n API key from KeyVault `n8n-api-key`
- `N8N_RTR_WEBHOOK_URL` — n8n webhook endpoint for RTR emails
- `FLYIOTOKEN` — Fly.io deploy token from KeyVault `FLYIOTOKEN`

## Deployment

```bash
cd recruiter-platform
fly deploy
```
