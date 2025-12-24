# Deployment instructions

Vercel (recommended)
- Set environment variables in the Project → Settings → Environment Variables:
  - `GEMINI_API_KEY` → (Value) — set as `Encrypted` / Production.

- If you prefer the CLI, run locally and follow prompts:
  ```bash
  vercel env add GEMINI_API_KEY production
  ```

- Push to `main` (or your production branch) and Vercel will deploy automatically.

Netlify (alternative)
- Create a Netlify site connected to this repo. Add these build settings:
  - Build command: `npm run build`
  - Publish directory: `dist`

- Add `GEMINI_API_KEY` in Site settings → Build & deploy → Environment → Environment variables.

Notes
- Never commit real API keys. Use the platform UI or CLI to configure secrets.
- After setting `GEMINI_API_KEY` in Vercel, your serverless `api/gemini` function will be able to call Gemini.
