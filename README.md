# Ghea J. Agcang — Portfolio

Built with Next.js (App Router), plain CSS, no extra dependencies.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/agcnghea28/YOUR_REPO_NAME.git
git push -u origin main
```

## Deploy on Vercel (free)

1. Go to vercel.com and sign in with GitHub.
2. Click "Add New Project" and select this repo.
3. Leave all settings as default (Vercel auto-detects Next.js) and click Deploy.
4. You'll get a live URL like `your-project.vercel.app` in about a minute.
5. Every future `git push` to `main` auto-deploys.

## What to edit

- `app/page.js` — all the text content (name, bio, projects, tools, skills, contact links).
- `app/globals.css` — colors, fonts, spacing (see the `:root` variables at the top).
- Replace the placeholder projects in the `projects` array in `app/page.js` once your case studies are ready.
